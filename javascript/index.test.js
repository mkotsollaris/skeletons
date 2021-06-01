import hello from ".";

describe('index', () => {

    it('hello world', () => {
        expect(hello()).toBe('hello world!');
    });
});