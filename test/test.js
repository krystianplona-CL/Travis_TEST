var expect = require('chai').expect;
var should = require('chai').should();

var number = 12;
var string = "string";

it('Variable "number" exist', function(){
  should.exist(number);
});

it('Variable "string" exist', function(){
  should.exist(string);
});
