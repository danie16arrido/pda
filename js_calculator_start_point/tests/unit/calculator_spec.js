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

  //Subtract///
  it('it can substract 0 to 0', function () {
    calculator.previousTotal = 0
    calculator.subtract(0)
    assert.equal(0, calculator.runningTotal)
  })

  it('it can subtract from negative number', function () {
    calculator.previousTotal = -3
    calculator.subtract(4)
    assert.equal(-7, calculator.runningTotal)
  })

  it('it can handle double negation)', function () {
    calculator.previousTotal = 3
    calculator.subtract(-4)
    assert.equal(7, calculator.runningTotal)
  })

  it('it can handle double negation up', function () {
    calculator.previousTotal = -3
    calculator.subtract(-4)
    assert.equal(1, calculator.runningTotal)
  })

  it('it can add subtract from positive number', function () {
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it('it can handle subtract to a negative number', function () {
    calculator.previousTotal = -3
    calculator.subtract(4)
    assert.equal(-7, calculator.runningTotal)
  })
  ///Multiply
  it('it can multiply 2 positive numbers', function () {
    calculator.previousTotal = 3
    calculator.multiply(3)
    assert.equal(9, calculator.runningTotal)
  })

  it('it can multiply 2 negative numbers', function () {
    calculator.previousTotal = -3
    calculator.multiply(-3)
    assert.equal(9, calculator.runningTotal)
  })

  it('it can multiply a negative and positive number', function () {
    calculator.previousTotal = -3
    calculator.multiply(3)
    assert.equal(-9, calculator.runningTotal)
  })

  it('it can multiply a negative and positive number v2', function () {
    calculator.previousTotal = 3
    calculator.multiply(-3)
    assert.equal(-9, calculator.runningTotal)
  })

  it('it can handle positive multiply by 0', function () {
    calculator.previousTotal = 3
    calculator.multiply(0)
    assert.equal(0, calculator.runningTotal)
  })

  it('it can handle negative multiply by 0', function () {
    calculator.previousTotal = -3
    calculator.multiply(0)
    assert.equal(0, calculator.runningTotal)
  })

  it('it can handle 0 by 0', function () {
    calculator.previousTotal = 0
    calculator.multiply(0)
    assert.equal(0, calculator.runningTotal)
  })
  ///Divide



});
