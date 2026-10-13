import fs from 'node:fs';
import vm from 'node:vm';
for (const file of ['dist/index.html','dist/app.html']) {
 const html=fs.readFileSync(file,'utf8');
 if(!html.includes('lang="es"'))throw new Error('Missing language '+file);
 for(const match of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(match[1]);
}
for(const file of ['dist/sw.js','dist/activities.js'])new vm.Script(fs.readFileSync(file,'utf8'));
const manifest=JSON.parse(fs.readFileSync('dist/manifest.webmanifest','utf8'));
if(manifest.display!=='standalone'||manifest.start_url!=='./app.html')throw new Error('Unexpected PWA settings');
for(const icon of manifest.icons)if(!fs.existsSync('dist/'+icon.src))throw new Error('Missing icon '+icon.src);
console.log('HTML scripts, activities, service worker, manifest and icons: OK. Device testing remains required.');
