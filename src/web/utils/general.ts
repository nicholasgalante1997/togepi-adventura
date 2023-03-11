export function getShadowColorOffType(types: string[]) {
    type ColorTypeTuple = [string, string];
    const colorSwatches = [
        ['grass', '#20b49c'],
        ['fire', '#e63900'],
        ['water', '#b4e6ee'],
        ['psychic', '#944abd'],
        ['steel', '#524a4a'],
        ['ice', '#52629c'],
        ['dragon', '#f6bd5a'],
        ['electric', '#ffff8b'],
        ['dark', '#313129'],
        ['normal', '#e6c594']
    ];
    for (const t of types) {
        for (const c of colorSwatches) {
            console.log(c[0]);
            console.log(t.toLowerCase());
            if (c[0] === t.toLowerCase()) {
                return c[1];
            }
        }
    }
    return '#000';
}