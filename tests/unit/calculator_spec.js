var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.equal(5, calculator.runningTotal);
  })

  it('it can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal);
  })

  it('it can multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal);
  })

  it('it can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal);
  })

  it('it can cancatenate multiple number clicks', function(){
    calculator.numberClick(7)
    calculator.numberClick(3)
    calculator.numberClick(0)
    assert.equal(730, calculator.runningTotal);
  })

  it('it can chain multiple operations together', function(){
    calculator.numberClick(7)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(10, calculator.runningTotal);
  })

  it('it can clear total', function(){
    calculator.numberClick(7)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal);
  })

});
//
// calculator.subtract() subtract 4 from 7 and get 3
// calculator.multiply() - multiply 3 by 5 and get 15
// calculator.divide() - divide 21 by 7 and get 3
// calculator.numberClick() - concatenate multiple number button clicks
// calculator.operatorClick() - chain multiple operations together
// calculator.clearClick() - clear the running total without affecting the calculation
