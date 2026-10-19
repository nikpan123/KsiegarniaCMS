import {spawn} from 'node:child_process';
import path from 'node:path';
const args=process.argv.slice(2);
const strict=args.includes('--assets');
const project=args.some(arg=>arg==='--project'||arg.startsWith('--project='))?[]:['--project=chromium'];
const child=spawn(process.execPath,[path.resolve('node_modules/@playwright/test/cli.js'),'test','--grep','@views',...project,'--workers=2',...args.filter(arg=>arg!=='--assets')],{
 stdio:'inherit',windowsHide:true,env:{...process.env,VIEW_STRICT_ASSETS:strict?'1':'0'},
});
child.on('error',error=>{console.error(error.message);process.exitCode=1;});
child.on('close',code=>{process.exitCode=code??1;});
