import path from 'path';
import fs from 'fs';

const args = process.argv.slice(2);
const [component, name] = args;

if (!component || !name) {
    console.error('Component Name is required to scaffold a component directory');
    process.exit(1);
}




process.exit(0);