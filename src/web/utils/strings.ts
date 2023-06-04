export function titleCase(str: string | string[], delimiter: string = ''): string {
  if (Array.isArray(str)) {
    return str.reduce((a, ns) => a + delimiter + ns.slice(0, 1).toUpperCase() + ns.slice(1).toLowerCase(), '');
  } else {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  }
}

export function camelCase(str: string[]): string {
  return str.reduce((a, ns) => {
    if (str.indexOf(ns) === 0) {
      return a + ns.toLowerCase();
    } else {
      return a + titleCase(ns);
    }
  }, '');
}
