/*!
 * string-omit <https://github.com/jonschlinkert/string-omit>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var should = require('should');
var omit = require('./');

describe('omit', function () {
  describe('string:', function () {
    it('should remove the string.', function () {
      omit('abcabcabcabcabcabc', 'a').should.equal('bcbcbcbcbcbc');
    });

    it('should return the string if no patterns are given.', function () {
      omit('abcabcabcabcabcabc').should.equal('abcabcabcabcabcabc');
    });

    it('should throw an error when no string is passed.', function () {
      (function () {
        omit(null);
      }).should.throw('omit-string expects a string.');
    });
  });

  describe('array:', function () {
    it('should remove each string in the array.', function () {
      omit('abcabcabcabcabcabc', ['a', 'c']).should.equal('bbbbbb');
      var fixture = 'this is a random sentence with words that can be omitted.';
      var actual = omit(fixture, ['random', 'that', 'can', 'be', 'omitted'])
      actual.should.equal('this is a  sentence with words    .');
    });
  });

  describe('regex:', function () {
    it('should use the regex pattern to replace values.', function () {
      omit('abcabcabcabcabcabc', [/a/g, /c/g]).should.equal('bbbbbb');
      var fixture = 'this is a random sentence with words that can be omitted.';
      var re = /random|that|can|be|omitted/;
      var actual = omit(fixture, re);
      actual.should.equal('this is a  sentence with words    .');
    });

    it('should use the regex pattern to replace values.', function () {
      var fixture = 'this is a random sentence with words that can be omitted.';
      var re = /(?:random|that|can|be|omitted)|(\s{3,})/g;
      var actual = omit(fixture, re);
      actual.should.equal('this is a  sentence with words.');
    });
  });
});
