import path from 'path';
import fs from 'fs';

var template = 
`
*******************************************************************
READ-SCRIPTS (read-scripts.mjs)
> Echoes available scripts from a local package.json file.
*******************************************************************

`;

function formatString(vars) {
    let t = 
`
'{{key}}'
command: {{script}}
---------------------------------------
`
    return t.replace('{{key}}', vars.key).replace('{{script}}', vars.script);
}

function readScriptFromLocalPackageJson(){
    try {
        const filepath = path.resolve(process.cwd(), 'package.json');
        const filecontents = fs.readFileSync(filepath, { encoding: 'utf-8' });
        const serializedFile = JSON.parse(filecontents);
        const { scripts = {} } = serializedFile;
        let output = template;
        for (const key in scripts) {
            output += formatString({ key: key, script: scripts[key] });
        }
        console.log(output);
    } catch (e) {
        throw e;
    }   
}

readScriptFromLocalPackageJson();