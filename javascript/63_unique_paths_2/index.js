const uniquePaths2 = (grid) => {

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            let elem = grid[row][col];
            if (elem === 1) {
                grid[row][col] = -1;
            } else {
                grid[row][col] = 1;
            }
        }
    }

    for (let row = 1; row < grid.length; row++) {
        let prev = grid[row - 1][0];
        let curr = grid[row][0];
        if (curr !== -1) {
            grid[row][0] = prev;
        }
    }

    for (let col = 1; col < grid[0].length; col++) {
        let prev = grid[0][col - 1];
        let curr = grid[0][col];
        if (curr !== -1) {
            grid[0][col] = prev;
        }
    }


    for (let row = 1; row < grid.length; row++) {
        for (let col = 1; col < grid[row].length; col++) {
            let elem1 = grid[row - 1][col];
            let elem2 = grid[row][col - 1];
            let curr = grid[row][col];
            if (curr === -1) {
                continue;
            } else if (elem1 === -1 || elem2 === -1) {
                grid[row][col] = Math.max(elem1, elem2);
                continue;
            } else {
                grid[row][col] = elem1 + elem2;
            }
        }
    }

    let ans = grid[grid.length - 1][grid[0].length - 1];
    if (ans === -1) {
        return 0
    }
    return ans;
}


export { uniquePaths2 }