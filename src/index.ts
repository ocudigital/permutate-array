import { Chance } from 'chance';

// Instantiate Chance so it can be used
let chance = new Chance();

export function generateSeed<T>(corpus: Array<T>, len: number): Array<T> {
    let result = []
    for (let i = 0; i < len; i++) {
        result.push(chance.pickone(corpus));
    }
    return result;
}

export function permutateArray<T>(seed: Array<T>, corpus: Array<T>, num_permutations: number, max_iterations: number = 1000): Array<Array<T>> {
    if (num_permutations > calculateMaxPermutations(seed.length, corpus.length)) {
        throw "permutate-array: cannot permutate array - corpus too short";
    }

    let result = [];
    let iterations = 0;
    while (result.length < num_permutations) {
        iterations++;

        if (max_iterations && iterations > max_iterations) {
            throw "permutate-array: max_iterations reached";
        }

        var new_item;
        if (result.length == 0) {
            new_item = seed.slice();
        }
        else {
            new_item = chance.pickone(result).slice();
        }

        let swap = chance.pickone(corpus);
        new_item[chance.integer({ min: 0, max: new_item.length - 1 })] = swap;

        if (is_same(seed, new_item) || in_array(new_item, result)) {
            continue;
        }
        else {
            result.push(new_item);
        }
    }

    return result;
}


// Not exact, but good enough
// See https://stackoverflow.com/questions/51502511/calculate-the-possible-permutations-given-a-length-and-possible-characters
function calculateMaxPermutations(len: number, corpus_len: number): number {
    return Math.pow(corpus_len, len);
}

// Check if needle is in haystack
export function in_array<T>(needle: T, haystack: Array<T>): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (!!needle && !!haystack[i] && !(needle < haystack[i] || haystack[i] < needle)) {
            return true;
        }
    }
    return false;
}

function is_same<T>(array1: Array<T>, array2: Array<T>): boolean {
    return (array1.length == array2.length) && array1.every(function (element, index) {
        return element === array2[index];
    });
}