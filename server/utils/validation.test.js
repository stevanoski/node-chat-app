const expect = require('expect');

let { isRealString } = require('./validation');

describe('isRealString', () => {
    it('Should reject non-string values', () => {

        let str = 5;
        let realString = isRealString(str);

        expect(realString).toBe(false);

    });

    it('Should reject string with only spaces', () => {
        let str = '   ';
        let realString = isRealString(str);

        expect(realString).toBe(false);
    });

    it('Should allow string with non-space characters', () => {
        let str = '  A l e x   ';
        let realString = isRealString(str);

        expect(realString).toBe(true);
    });
});