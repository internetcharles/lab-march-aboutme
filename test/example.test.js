// IMPORT MODULES under test here:
import isYes from '../src/isYes.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes('Y');
    const result1 = isYes('YES');
    const result2 = isYes('Yes');
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, true);
    assert.equal(result1, true);
    assert.equal(result2, true);
});
