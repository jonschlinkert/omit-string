/*!
 * omit-string <https://github.com/jonschlinkert/omit-string>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var typeOf = require('kind-of');

module.exports = function omitString(str, omit) {
  if (str == null) {
    throw new Error('omit-string expects a string.');
  }

  if (omit == null) {
    return str;
  }

  omit = Array.isArray(omit) ? omit : [omit];

  var len = omit.length;
  for (var i = 0; i < len; i++) {
    var token = omit[i];
    var match = true;

    while (match) {
      if (typeOf(token) === 'regexp') {
        match = token.test(str);
      } else {
        match = str.indexOf(token) !== -1;
      }
      str = str.replace(token, '');
    }
  }
  return str;
};