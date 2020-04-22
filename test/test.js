var permutate_array = require('../index.js');
var chai = require('chai');

describe('in_array', function () {
    it('should work', function () {
        permutate_array.in_array([1, 2, 3], [[1, 2, 3], [2, 3, 4]]).should.equal(true);
    });
});