const assert = require('assert');
const pathFinder = require('../js/wide-search');

describe('Test function pathFinder', () => {
    // describe('Test table 2x2', () => {
    //     it ('should return true when the table is \n..\n..', () => {
    //         const expected = true;
    //         const actual = `..\n..`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    //
    //     it ('should return true when the table is \n.W\n..', () => {
    //         const expected = true;
    //         const actual = `.W\n..`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    //
    //     it ('should return true when the table is \n..\nW.', () => {
    //         const expected = true;
    //         const actual = `..\nW.`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    //
    //     it ('should return false when the table is \n.W\nW.', () => {
    //         const expected = false;
    //         const actual = `.W\nW.`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    // });

    // describe('Test table 3x3', () => {
    //     it ('should return true when the table is \n...\n...\n...', () => {
    //         const expected = true;
    //         const actual = `...\n...\n...`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    //
    //     it ('should return true when the table is \n...\nW..\n...', () => {
    //         const expected = true;
    //         const actual = `...\nW..\n...`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    //     it ('should return true when the table is \n...\n..W\n...', () => {
    //         const expected = true;
    //         const actual = `...\n..W\n...`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    //     it ('should return false when the table is \n.W.\nW..\n...', () => {
    //         const expected = false;
    //         const actual = `.W.\nW..\n...`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    //     it ('should return true when the table is \n.W.\n.W.\n...', () => {
    //         const expected = true;
    //         const actual = `.W.\n.W.\n...`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    //     it ('should return true when the table is \n.W.\n..W\n...', () => {
    //         const expected = true;
    //         const actual = `.W.\n..W\n...`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    //     it ('should return false when the table is \n.W.\n.W.\n.W.', () => {
    //         const expected = false;
    //         const actual = `.W.\n.W.\n.W.`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    //     it ('should return true when the table is \n..W\nW..\nW..', () => {
    //         const expected = true;
    //         const actual = `..W\nW..\nW..`;
    //         assert.equal(pathFinder(actual), expected);
    //     });
    // });

    describe('Test table 4x4', () => {
        it ('should return true when the table is \n....\n....\n....\n....', () => {
            const expected = true;
            const actual = `....\n....\n....\n....`;
            assert.equal(pathFinder(actual), expected);
        });
        it ('should return true when the table is \n....\n...W\n....\n....', () => {
            const expected = true;
            const actual = `....\n...W\n....\n....`;
            assert.equal(pathFinder(actual), expected);
        });
        it ('should return true when the table is \n....\n....\n....\n..W.', () => {
            const expected = true;
            const actual = `....\n....\n....\n..W.`;
            assert.equal(pathFinder(actual), expected);
        });
        it ('should return false when the table is \n..W.\n..W.\n..W.\n..W.', () => {
            const expected = false;
            const actual = `..W.\n..W.\n..W.\n..W.`;
            assert.equal(pathFinder(actual), expected);
        });
        it ('should return true when the table is \n...W\n..WW\n..W.\n....', () => {
            const expected = true;
            const actual = `...W\n..WW\n..W.\n....`;
            assert.equal(pathFinder(actual), expected);
        });
    });
});
