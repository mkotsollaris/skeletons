const hello = () => 'hello world!';

const reducer = (accumulator, currentValue) => {
    if (accumulator.length === 0) {
        accumulator.push(currentValue);
        return accumulator;
    }

    const index = accumulator.findIndex(el => el[1] === currentValue[1]);

    if (index !== -1) {
        accumulator[index][0] += currentValue[0];
        return accumulator;
    }
    accumulator.push(currentValue);
    return accumulator
};

let withForLoop = (input) => {
    let res = [];
    for (let i = 0; i < input.length; i++) {
        let currInput = input[i];
        const index = res.findIndex(el => el[1] === currInput[1]);
        if (index !== -1) {
            res[index][0] += currInput[0];
            continue;
        }
        res.push(currInput);
    }
    return res;
}

export { reducer, withForLoop }

export default hello;