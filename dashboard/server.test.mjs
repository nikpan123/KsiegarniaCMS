import {test} from 'node:test';
import {request} from 'node:http';
import assert from 'node:assert/strict';
import {mkdtemp,mkdir,writeFile,readFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createDashboard} from './server.mjs';
import {loadCatalog} from './catalog.mjs';

async function fixture(){
 const root=await mkdtemp(path.join(tmpdir(),'cms-dashboard-'));
 await mkdir(path.join(root,'tests'));await mkdir(path.join(root,'node_modules/@playwright/test'),{recursive:true});
 await writeFile(path.join(root,'tests/products.spec.ts'),'test("Produkty <próba>", async () => {});');
 await writeFile(path.join(root,'.env'),'BASE_URL=http://example.invalid/admin/\nUSER_NAME=fixture\nPASSWORD=fixture-secret-123\n');
 const fake=`const fs=require('node:fs');const p=require('node:path');console.log('test log fixture-secret-123');console.log('ASSET_MODE:'+process.env.VIEW_STRICT_ASSETS);console.log('CMS_EVENT:'+JSON.stringify({type:'begin',total:1}));setTimeout(()=>{fs.mkdirSync(process.env.PLAYWRIGHT_HTML_OUTPUT_DIR,{recursive:true});fs.writeFileSync(p.join(process.env.PLAYWRIGHT_HTML_OUTPUT_DIR,'index.html'),'Fixture report');console.log('CMS_EVENT:'+JSON.stringify({type:'test',title:'Produkty <próba>',file:'products.spec.ts',status:'passed',duration:10,retry:0}));console.log('CMS_EVENT:'+JSON.stringify({type:'end',status:'passed'}));},150);`;
 await writeFile(path.join(root,'node_modules/@playwright/test/cli.js'),fake);
 return root;
}
async function start(root){const server=await createDashboard({projectRoot:root});await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const origin='http://127.0.0.1:'+server.address().port;const html=await(await fetch(origin)).text();const token=html.match(/name="cms-token" content="([^"]+)"/)[1];return {server,origin,token};}
async function stop(server){if(server?.listening)await new Promise(resolve=>server.close(resolve));}
async function cleanup(root){const resolved=path.resolve(root);assert.equal(path.dirname(resolved),path.resolve(tmpdir()));assert.ok(path.basename(resolved).startsWith('cms-dashboard-'));await rm(resolved,{recursive:true,force:true});}
const post=(ctx,body,headers={})=>fetch(ctx.origin+'/api/run',{method:'POST',headers:{Origin:ctx.origin,'Content-Type':'application/json','X-CMS-Token':ctx.token,...headers},body:JSON.stringify(body)});

test('Katalog i API nie ujawniają konfiguracji; nieprawidłowe żądania nie uruchamiają procesu',async()=>{
 const root=await fixture();let ctx;
 try{
  ctx=await start(root);const catalog=await loadCatalog(root);assert.equal(catalog.length,1);assert.equal(catalog[0].id,'cms:products');
  const text=await(await fetch(ctx.origin+'/api/state')).text();assert.ok(!text.includes('fixture-secret'));assert.ok(!text.includes('USER_NAME=fixture'));
  const body={testIds:['cms:products'],browser:'chromium',headed:false};
  assert.equal((await post(ctx,body,{Origin:'https://example.com'})).status,403);
  assert.equal((await post(ctx,body,{'X-CMS-Token':'wrong'})).status,403);
  assert.equal((await post(ctx,{...body,browser:'cmd.exe'})).status,400);
  assert.equal((await post(ctx,{...body,strictAssets:'yes'})).status,400);
  assert.equal((await post(ctx,{...body,testIds:['../../other']})).status,400);
  const hostStatus=await new Promise((resolve,reject)=>{const req=request(ctx.origin+'/api/state',{headers:{Host:'example.com'}},res=>{res.resume();resolve(res.statusCode);});req.on('error',reject);req.end();});assert.equal(hostStatus,403);
  assert.equal(JSON.parse(await readFile(path.join(root,'.cms/history.json'),'utf8')).length,0);
 }finally{await stop(ctx?.server);await cleanup(root);}
});

test('Uruchomienie zapisuje rzeczywiste zdarzenia, blokuje duplikaty, maskuje sekret i udostępnia trwały raport',async()=>{
 const root=await fixture();let ctx;
 try{
  ctx=await start(root);const body={testIds:['cms:products'],browser:'chromium',headed:false,strictAssets:true};
  const response=await post(ctx,body);assert.equal(response.status,202);const run=await response.json();
  assert.equal((await post(ctx,body)).status,409);
  let state;
  for(let attempt=0;attempt<100;attempt++){state=await(await fetch(ctx.origin+'/api/state')).json();if(!state.active)break;await new Promise(r=>setTimeout(r,30));}
  assert.equal(state.active,null);assert.equal(state.history[0].status,'PASSED');assert.equal(state.history[0].counts.passed,1);assert.equal(state.history[0].results.length,1);
  assert.ok(!JSON.stringify(state).includes('fixture-secret-123'));assert.ok(state.history[0].logs.some(line=>line.includes('[ukryto]')));assert.ok(state.history[0].logs.includes('ASSET_MODE:1'));assert.equal(state.history[0].strictAssets,true);
  assert.equal(await(await fetch(ctx.origin+state.history[0].report)).text(),'Fixture report');
  assert.equal((await fetch(ctx.origin+'/report/'+run.id+'/%2e%2e%2fhistory.json')).status,404);
  await stop(ctx.server);ctx=await start(root);state=await(await fetch(ctx.origin+'/api/state')).json();assert.equal(state.history[0].id,run.id);assert.equal(state.history[0].status,'PASSED');
 }finally{await stop(ctx?.server);await cleanup(root);}
});

test('Blokada innego procesu chroni uruchomienie i nie zmienia wyniku RUNNING na przerwany',async()=>{
 const root=await fixture();let ctx;
 try{
  await mkdir(path.join(root,'.cms'));await writeFile(path.join(root,'.cms/run.lock'),JSON.stringify({pid:process.pid}));
  await writeFile(path.join(root,'.cms/history.json'),JSON.stringify([{id:'other',status:'RUNNING'}]));
  ctx=await start(root);const response=await post(ctx,{testIds:['cms:products'],browser:'chromium',headed:false});assert.equal(response.status,409);
  const history=JSON.parse(await readFile(path.join(root,'.cms/history.json'),'utf8'));assert.equal(history[0].status,'RUNNING');
 }finally{await stop(ctx?.server);await cleanup(root);}
});
