'use strict';

function dblLinear(n) {
    const arrayNumbers = [1];

    for (let i = 0; i < n; i++) {
        const x = 2 * arrayNumbers[i] + 1;

        const position = arrayNumbers.findIndex(item => item > x);

        if (position !== -1) {
            if (arrayNumbers.includes(x)) {
                arrayNumbers.push(x + i + 1);
            } else {
                arrayNumbers.splice(position, 0, x);
                arrayNumbers.push(x + i + 1);
            }
        } else {
            if (arrayNumbers.includes(x)) {
                arrayNumbers.push(x + i + 1);
            } else {
                arrayNumbers.push(x);
                arrayNumbers.push(x + i + 1);
            }
        }
    }

    return arrayNumbers;
}

console.dir(dblLinear(20));
