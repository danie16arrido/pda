var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons I', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should start displaying 0', function () {
    running_total = element(by.css('#running_total'))
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

  it('should have working number buttons II', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('should have working sum function', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('should have working subtract function', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1')
  })

  it('should have working sum function', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  it('should have working sum function', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should be able to clear after typing in many numbers', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number9')).click();
    element(by.css('#clear')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

  it('should be able to clear after typing in many numbers and an operator', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#number7')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#clear')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0')
  })

  it('should be able to use the previous operator after pressing a secon operator', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('120')
  })

  it('should be able to display message when 0 is the divisor', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Division by 0 not allowed')
  })

  it('should be able to display message when 0 is the divisor II', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number7')).click();
    element(by.css('#operator_equals')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Division by 0 not allowed')
  })

  it('should be able to display negative numbers', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-3')
  })

  it('should be able to display negative numbers', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-3')
  })

  it('should be able to display decimals', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1.5')
  })

  it('should be able to display scientific notation positive', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    counter = 0
    while (counter < 21) {
      element(by.css('#number0')).click();
      counter++
    }
    expect(running_total.getAttribute('value')).to.eventually.equal('9e+21')
  })

  it('should be able to display scientific notation negative', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number1')).click();
    counter = 0
    while (counter < 17) {
      element(by.css('#number0')).click();
      counter++
    }
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9e-17')
  })

});