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
        // while (x !== goal || y !== goal) {
        //     const moveRight = () => x++;
        //     const moveDown = () => {
        //         y++;
        //         x = 0;
        //     };
        //
        //     if (y !== sizeTable) {
        //         if (table[y][x] === true && x !== sizeTable) {
        //             moveRight();
        //         } else {
        //             moveDown();
        //         }
        //     } else {
        //         return false;
        //     }
        // }

        if (x === goal && y === goal) {
            result = true;
        } else {
            if (table[y][++x]) {
                moveOnBoard(x, y);
            } else if (table[++y][--x]) {
                moveOnBoard(x, y);
            } else {
                return false;
            }
        }

        return result;
    };

    makeTable();

    return moveOnBoard(x, y);
}

console.dir(pathFinder(`.W.
.W.
W..`));
