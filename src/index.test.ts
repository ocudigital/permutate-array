import { generateSeed, permutateArray, in_array } from './index';
import { expect } from 'chai';
import 'mocha';

describe('in_array', () => {
    it('works', () => {
        var result;

        result = in_array([1, 2, 3], [[1, 2, 3], [1, 2, 3, 4]]);
        expect(result).to.equal(true);

        result = in_array(['a', 'b', 'c'], [[1, 2, 3], [1, 2, 3, 4], ['a', 'b', 'c']]);
        expect(result).to.equal(true);

        result = in_array(['a', 'b'], [[1, 2, 3], [1, 2, 3, 4], ['a', 'b', 'c']]);
        expect(result).to.equal(false);

        result = in_array(['a', 'b', 'c'], [[1, 2, 3], [1, 2, 3, 4], ['a', 'b', 'd']]);
        expect(result).to.equal(false);
    });
});

describe('permutateArray', () => {
    it('works', () => {
        let corpus = ['a', 'b', 'c', 'd', 'e'];

        let seed = generateSeed(corpus, 3);

        var result = permutateArray(seed, corpus, 3);
        expect(result.length).to.equal(3);
    });

    it('passes recogintion test', () => {
        let seed = [1, 1];
        let corpus = [2, 1, 4];

        let result = permutateArray(seed, corpus, 4);
        expect(result.length).to.equal(4);
    });

    it('passes visual_memory test', () => {
        let seed = [9];
        let corpus = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        let result = permutateArray(seed, corpus, 4);
        expect(result.length).to.equal(4);
    });
});
