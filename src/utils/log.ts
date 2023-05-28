import pino, { Level } from 'pino';
import { request } from './request';

function getLevel(): Level | 'silent' {
  const envSuppliedLevel = process.env.TOGEPI_LOG_LEVEL;
  if (envSuppliedLevel) {
    return envSuppliedLevel as Level;
  }
  if (process.env.NODE_ENV === 'development') {
    return 'info';
  }
  return 'silent';
}

var logger = pino({
  level: getLevel(),
  name: 'togepi-logger',
  browser: {
    asObject: true,
    write: (o) => {
      const shouldPipeLogs = process.env.TOGEPI_EMIT_LOGS;
      if (shouldPipeLogs) {
        const logline = '';
        Object.entries(o).reduce((agg, next) => (agg += `${next[0]}=${next[1]},\n`), logline);
        const data = JSON.stringify({ data: logline });
        request({
          url: process.env.TOGEPI_LOGGER_AGENT_ENDPOINT,
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Content-Encoding': data.length,
            'X-Togepi-Logging-Key': process.env.TOGEPI_LOGGING_KEY ?? '',
          },
        });
      } else {
        console.log(o);
      }
    },
  },
});

export function l(m: unknown, level: 'info' | 'warn' | 'error' | 'debug' | 'fatal' | 'silent' = 'info') {
  logger[level](m);
}
