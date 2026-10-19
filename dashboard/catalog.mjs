import {readdir, readFile} from 'node:fs/promises';
import path from 'node:path';

export async function loadCatalog(root) {
  const files = (await readdir(path.join(root, 'tests'))).filter(f => f.endsWith('.spec.ts')).sort();
  const rows = [];
  for (const file of files) {
    const source = await readFile(path.join(root, 'tests', file), 'utf8');
    const matches = [...source.matchAll(/\btest\(\s*["'`]([^"'`]+)["'`]/g)];
    for (let index = 0; index < matches.length; index++) {
      const match = matches[index];
      const code = file.replace('.spec.ts', '') + (matches.length > 1 ? ':' + (index + 1) : '');
      rows.push({id:'cms:' + code, code, title:match[1], project:'cms', type:'automatic',
        module:file.startsWith('new') ? 'Formularze tworzenia' : 'Listy i zarządzanie',
        file:'tests/' + file, line:source.slice(0,match.index).split('\n').length,
        tags:['Sylius','Playwright'], source:'Scenariusz Playwright — Księgarnia CMS'});
    }
  }
  return rows;
}
