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

  it('it can handle any number divide by 1 equals such number', function () {
    calculator.previousTotal = 44
    calculator.divide(1)
    assert.equal(44, calculator.runningTotal)
  })

  it('it can handle any number divide by itself is equal to 1', function () {
    calculator.previousTotal = 33
    calculator.divide(33)
    assert.equal(1, calculator.runningTotal)
  })

  it('it can handle 15 decimals rounding', function () {
    calculator.previousTotal = 19
    calculator.divide(3)
    assert.equal(6.333333333333333, calculator.runningTotal)
  })

  it('it can handle 1 decimal rounding', function () {
    calculator.previousTotal = 19
    calculator.divide(2)
    assert.equal(9.5, calculator.runningTotal)
  })

  it('it can handle exact division', function () {
    calculator.previousTotal = 15
    calculator.divide(3)
    assert.equal(5, calculator.runningTotal)
  })

  it('it can handle subdivison', function () {
    calculator.previousTotal = 2
    calculator.divide(8)
    assert.equal(0.25, calculator.runningTotal)
  })

  it('it can handle negative numbers', function () {
    calculator.previousTotal = 19
    calculator.divide(-2)
    assert.equal(-9.5, calculator.runningTotal)
  })

  it('it can handle negatigve numbers II', function () {
    calculator.previousTotal = -19
    calculator.divide(2)
    assert.equal(-9.5, calculator.runningTotal)
  })

  it('it can handle two negative numbers', function () {
    calculator.previousTotal = -19
    calculator.divide(-2)
    assert.equal(9.5, calculator.runningTotal)
  })

  it('it can handle 0 divided by any number', function () {
    calculator.previousTotal = 0
    calculator.divide(2)
    assert.equal(0, calculator.runningTotal)
  })

  it('it can handle 0 divide by negative number', function () {
    calculator.previousTotal = 0
    calculator.divide(-2)
    assert.equal(0, calculator.runningTotal)
  })

  it('it can handle positive number divided by 0', function () {
    calculator.previousTotal = 19
    calculator.divide(0)
    assert.equal(Infinity, calculator.runningTotal)
  })

  it('it can handle negative number divided by 0', function () {
    calculator.previousTotal = -19
    calculator.divide(0)
    assert.equal(-Infinity, calculator.runningTotal)
  })

  it('it can handle 0 divided by 0', function () {
    calculator.previousTotal = 19
    calculator.divide(0)
    assert.equal(Infinity, calculator.runningTotal)
  })
  //numberClick()
  // when a number is clicked, if a previous operation has just been completed,
    // or there is a zero in the running total, clear the running total, and reset
    // the `newTotal` flag

  it('it can set newTotal flag', function () {
    calculator.numberClick(1)
    assert.equal(false, calculator.newTotal)
  }) 
  
  it('it can set the running total to the clicked number', function () {
    calculator.numberClick(1)
    assert.equal(1, calculator.runningTotal)
  })

  it('it can set the runningTotal to the clicked numberS ', function () {
    calculator.numberClick(1)
    calculator.numberClick(2)
    assert.equal(12, calculator.runningTotal)
  })

  it('it can handle many 0 clicked', function () {
    calculator.numberClick(0)
    calculator.numberClick(0)
    calculator.numberClick(0)
    assert.equal(0, calculator.runningTotal)
  })











});
