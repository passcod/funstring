/*global describe, it*/
'use strict';

var assert  = require('assert');
var funstring = require('../funstring');

describe('funstring', function() {
  it('should be a function', function() {
    assert.equal(typeof funstring, 'function');
  });
});

var empty = '(function anonymous() {  })';
describe(empty, function() {
  it('== function(){}', function() {
    assert.equal(funstring(function(){}), empty);
  });

  it('== function () {}', function() {
    assert.equal(funstring(function () {}), empty);
  });

  it('== function ( ) { }', function() {
    assert.equal(funstring(function ( ) { }), empty);
  });

  it('== function() {}', function() {
    assert.equal(funstring(function() {}), empty);
  });

  it('== function        ()          {}', function() {
    assert.equal(funstring(function       ()     {}), empty);
  });

  it('== function(      ){           }', function() {
    assert.equal(funstring(function(         ){       }), empty);
  });

  it('== function      (       )       {     }', function() {
    assert.equal(funstring(function    (      )      {     }), empty);
  });

  it('== function anonymous(){}', function() {
    assert.equal(funstring(function anonymous(){}), empty);
  });

  it('== function anonymous (){}', function() {
    assert.equal(funstring(function anonymous (){}), empty);
  });

  it('!= function named(){}', function() {
    assert.notEqual(funstring(function named(){}), empty);
  });
});

var paramComments = '(function anonymous(/* */) {  })';
describe(paramComments, function() {
  it('== function(/* */){}', function() {
    assert.equal(funstring(function(/* */){}), paramComments);
  });

  it('== function (/* */) {}', function() {
    assert.equal(funstring(function (/* */) {}), paramComments);
  });

  it('== function( /* */ ){}', function() {
    assert.equal(funstring(function( /* */ ){}), paramComments);
  });

  it('!= function(/*  */){}', function() {
    assert.notEqual(funstring(function(/*  */){}), paramComments);
  });

});