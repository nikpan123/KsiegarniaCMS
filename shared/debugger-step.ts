import {test} from './browser-preview';
import {debuggerStep as operation} from '../dashboard/debugger/client.mjs';
export function debuggerStep<T>(title:string,callback:()=>Promise<T>){return test.step(title,()=>operation(title,callback));}
