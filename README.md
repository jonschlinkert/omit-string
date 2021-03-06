# omit-string [![NPM version](https://badge.fury.io/js/omit-string.svg)](http://badge.fury.io/js/omit-string)

> Pass a string or a array of strings to strip from the source string. Works just like `omit` for objects, so you can pass a string or array of strings to remove. You can also pass a regex or array of regular expressions, but patterns are used for removal - not replacements.

## Install
#### Install with [npm](npmjs.org)

```bash
npm i omit-string --save
```

## Run tests

```bash
npm test
```

## Usage

```js
var omit = require('omit-string');

omit('abcabcabcabcabcabc', 'a')
//=> 'bcbcbcbcbcbc'

omit('abcabcabcabcabcabc', ['a', 'c'])
//=> 'bbbbbb'

omit('abcabcabcabcabcabc', [/a/g, /c/g])
//=> 'bbbbbb'
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue][issues].

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 12, 2014._

[issues]: https://github.com/jonschlinkert/string-omit/issues