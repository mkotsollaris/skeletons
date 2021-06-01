import hello from ".";
import { uniquePaths2 } from '.';

describe('index', () => {
    it('unique paths', () => {
        expect(uniquePaths2([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2);
        expect(uniquePaths2([[0, 1], [0, 0]])).toBe(1);
        expect(uniquePaths2([[0, 1, 0], [1, 0, 0], [0, 0, 0]])).toBe(0);
    })
});