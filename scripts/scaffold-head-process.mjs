import childProcess from 'child_process';
import path from 'path';

const args = process.argv.slice(2); // npm run / [...]

const HELP_TEMPLATE = 
`*****************************************************************************************************************
*****************************************************************************************************************
*****************************************************************************************************************
NODE SCAFFODING UTILS
*****************************************************************************************************************
*****************************************************************************************************************
*****************************************************************************************************************

Usage: yarn scaffold <type> <name> [...options|flags] | npm run scaffold <type> <name> [...options|flags]

    Types

    component <type>
        component > generate a component directory and standard file tree structure.
        
        options:
            --withNoTests > skips creating a *.test.tsx file
            --withNoStyles > skips creating a scss | .styles.tsx file
            --withStyledComponents > comma delineated list of shell styled components to generate
                i.e. --withStyledComponents Header=div,Title=h1
                generates > const Header = styled.div\`\`, Title = styled.h1\`\`;
            --withHooks [string] > comma separated string list of dependent hooks this component maintains

    hook <type>
        hook > generate a react hook directory and standard subfiles
    
        options: 
            --withNoTests > skips creating a *.test.tsx file
            --query > creates a react-query hook and corresponding service file

    graphql-hook <type>
        graphql-hook > generate a react apollo graphql hook

        options:
            --withNoTests > skips creating a *.test.tsx file
`;

function help() { console.log(HELP_TEMPLATE); }

if (args.length === 0 || args[0] === "--help") {
    help();
    process.exit(0);
}

const type = args[0];
const execFile = `${type}.mjs`;

childProcess.fork(path.resolve(process.cwd(), 'scripts', 'scaffolds', execFile), args);