import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import {DebugHub} from './debugger/hub.mjs';
import {chromium} from 'playwright';
async function until(check){const end=Date.now()+8000;while(!await check()){if(Date.now()>end)throw new Error('Timeout debuggera');await new Promise(r=>setTimeout(r,20));}}

test('Debugger UI: konfiguracja, pojedynczy start, F10, raport i oba motywy',async()=>{
 const hub=new DebugHub({project:'Test',environment:()=> 'offline',catalog:()=>[{id:'one',title:'Przykładowy przypadek',mode:'ui',description:'Lokalny test interfejsu bez połączenia z aplikacją.'}],start:()=>{const run=hub.create({id:'ui-one',title:'Przykładowy przypadek',mode:'ui',environment:'offline'});run.event({kind:'start',stepId:'step',title:'Otwórz formularz'});run.wait('step');},stop:()=>{}});
 const server=http.createServer(async(req,res)=>{await hub.handle(req,res,new URL(req.url,'http://'+req.headers.host));});await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({headless:true,...(process.env.DEBUGGER_CHANNEL?{channel:process.env.DEBUGGER_CHANNEL}:{})});
 try{
  const page=await browser.newPage();await page.goto(base+'/debugger/');await page.selectOption('#tests','one');assert.equal(hub.last,null);
  page.once('dialog',d=>d.accept());await page.locator('#start').click();await page.locator('#session').waitFor();await until(()=>hub.last?.snapshot().steps[0]?.ready);
  await until(async()=>!await page.locator('#next').isDisabled());await page.keyboard.press('F10');await until(()=>hub.last.steps[0].status==='running');
  await page.keyboard.press('F10');assert.equal(hub.last.steps.length,1);
  hub.last.event({kind:'finish',stepId:'step',status:'passed'});await hub.finish('ui-one','PASS',{report:'/report/offline/'});
  await page.locator('#report').waitFor();
  for(const theme of ['light','dark']){await page.context().addCookies([{name:'qa_ui_theme',value:theme,url:base}]);await until(async()=>await page.locator('html').getAttribute('data-theme')===theme);for(const width of [1600,1000,390,320]){await page.setViewportSize({width,height:1000});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,theme+' '+width);}}
 }finally{await browser.close();hub.last?.close();server.closeAllConnections();await new Promise(r=>server.close(r));}
});

import {spawn} from 'node:child_process';
import {once} from 'node:events';

test('CMS: rzeczywisty Playwright czeka na kroki i przesyła obraz lokalnej strony', {timeout:45000}, async()=>{
 const hub=new DebugHub({project:'CMS lokalny',catalog:()=>[],start:()=>{},stop:()=>{}});
 const session=hub.create({id:'cms-offline',title:'Próba',mode:'ui',environment:'offline'});
 const server=http.createServer(async(req,res)=>{await hub.handle(req,res,new URL(req.url,'http://'+req.headers.host));});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const child=spawn(process.execPath,['node_modules/@playwright/test/cli.js','test','--config=playwright.debugger-check.config.ts'],{cwd:new URL('..',import.meta.url),windowsHide:true,env:{...process.env,QA_DEBUGGER:'1',QA_BROWSER_PREVIEW:'0',QA_DEBUG_URL:'http://127.0.0.1:'+server.address().port,QA_DEBUG_KEY:session.key,QA_DEBUG_RUN:session.id}});
 let output='';child.stdout.on('data',c=>output+=c);child.stderr.on('data',c=>output+=c);const ended=once(child,'close');
 try{
  await until(()=>session.snapshot().steps[0]?.ready);
  session.next(session.steps[0].id);
  await until(()=>session.snapshot().steps[1]?.ready);
  await until(()=>session.frame);
  assert.ok(session.frame.length>1000,'Rzeczywisty obraz JPEG z przeglądarki');
  assert.equal(session.steps[1].status,'waiting');
  session.next(session.steps[1].id);
  const [code]=await ended;assert.equal(code,0,output);
  assert.deepEqual(session.steps.map(s=>s.status),['passed','passed']);
 }catch(error){throw new Error(error.message+'\n'+output);}
 finally{session.close();if(child.exitCode===null){if(process.platform==='win32')spawn('taskkill',['/pid',String(child.pid),'/T','/F'],{windowsHide:true});else child.kill();}server.closeAllConnections();await new Promise(r=>server.close(r));}
});
