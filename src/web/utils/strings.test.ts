import { camelCase, titleCase } from './strings';

describe('camelCase', () => {
    test('it accepts a string array and returns a camel case string', () => {
        const strs = ['chief', 'dumpling', 'brigid'];
        expect(camelCase(strs)).toBe('chiefDumplingBrigid');
    });
})

describe('titleCase', () => {
    test('it accepts a string and turns it to title case', () => {
        const testStr = 'TESTSTR';
        expect(titleCase(testStr)).toBe('Teststr');
    })
    test('it accepts a string array and turns it to title case', () => {
        const testStr = ['TEST', 'STR'];
        expect(titleCase(testStr)).toBe('TestStr');
    })
})