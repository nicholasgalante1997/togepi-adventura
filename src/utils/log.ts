import chalk from 'chalk';

export function l(m: unknown, level: 'info' | 'warn' | 'error' = 'info'){
    let color: 'yellow' | 'red' | 'green'; 
    switch(level){
        case 'error':
            color = 'red';
            break;
        case 'warn':
            color = 'yellow';
            break;
        case 'info':
        default:
            color = 'green';
    }
    console[level](chalk[color](m));
}