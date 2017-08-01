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

  it('it can  add 0 to 0', function () {
    calculator.previousTotal = 0
    calculator.add(0)
    assert.equal(0, calculator.runningTotal)
  })

  it('it can add to a negative number', function () {
    calculator.previousTotal = -3
    calculator.add(4)
    assert.equal(1, calculator.runningTotal)
  })

  it('it can add a negative number', function () {
    calculator.previousTotal = 3
    calculator.add(-4)
    assert.equal(-1, calculator.runningTotal)
  })

  it('it can add two negative number', function () {
    calculator.previousTotal = -3
    calculator.add(-4)
    assert.equal(-7, calculator.runningTotal)
  })

  it('it can add two positive numbers', function () {
    calculator.previousTotal = 3
    calculator.add(4)
    assert.equal(7, calculator.runningTotal)
  })

  it('it can add a positive number to a negative', function () {
    calculator.previousTotal = -3
    calculator.add(4)
    assert.equal(1, calculator.runningTotal)
  })



});
