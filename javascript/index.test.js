import hello, { withForLoop } from ".";
import { reducer } from '.';

describe('index', () => {

    it('hello world', () => {
        expect(hello()).toBe('hello world!');
    })

    it('reducer', () => {
        var currInv = [
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"]
        ];

        var newInv = [
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [67, "Bowling Ball"],
            [7, "Toothpaste"]
        ];

        let invs = [...currInv, ...newInv];

        const sortFn = (a, b) => a[0] - b[0];

        let withForLoopRes = withForLoop([...invs]).sort(sortFn)
        let withReducerRes = [...invs].reduce(reducer, []).sort(sortFn);

        console.log('withForLoopRes', withForLoopRes);
        console.log('withReducerRes', withReducerRes);
    })
});