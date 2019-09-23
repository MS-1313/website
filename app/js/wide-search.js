'use strict';

function pathFinder(maze) {
    const string = maze.replace(/\n/gm, '');
    const table = [];
    const sizeTable = Math.sqrt(string.length);
    const goal = sizeTable - 1;
    const x = 0;
    const y = 0;
    let result = false;

    const makeTable = () => {
        let position = 0;

        for (let i = 0; i < sizeTable; i++) {
            const subArray = [];

            for (let j = 0; j < sizeTable; j++) {
                string[position] === '.' ? subArray.push(true) : subArray.push(false);
                position++;
            }

            table.push(subArray);
        }

        return table;
    };

    const moveOnBoard = (x, y) => {

        if (x === goal && y === goal) {
            result = true;
        } else {
            if (table[y][++x]) {
                moveOnBoard(x, y);
            } else if (table[y][x] === undefined) {
                moveOnBoard(x - 2, ++y);
            } else if (y !== goal && table[++y][--x]) {
                moveOnBoard(x, y);
            } else {
                result = false;
            }
        }

        return result;
    };

    makeTable();

    return moveOnBoard(x, y);
}

console.log(pathFinder(`...W\n..WW\n..W.\n....`));
