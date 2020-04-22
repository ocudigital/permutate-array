# permutate-array
Permutate a seed to get a bunch of randomly similar permutations

## Example

```ts

import { generateSeed, permutateArray } from 'permutate-array';

// Some corpus of allowed values
let corpus = ['a', 'b', 'c', 'd', 'e'];

// Generate a seed array with 3 values picked from the corpus of allowed values
let seed = generateSeed(corpus, 3);

// Get a set of permutations from the seed using the corpus of allowed values, the result will never incude the seed.
let result = permutateArray(seed, corpus, 3);

// Peek at the values
console.log(seed)
// [ 'a', 'd', 'e' ]

console.log(result)
// [ [ 'a', 'd', 'a' ], [ 'c', 'd', 'e' ], [ 'a', 'd', 'c' ] ]
```
