var assert = require('assert');
var totsuzennnoshi = require('../totsuzennoshi');

describe('totsuzennnoshi.generate()', function() {
  var message = 'あああ';
  var expected = '＿人人人人＿\n＞ あああ ＜\n￣Y^Y^Y^Y￣';
  it('引数' + message + '場合は、' + expected + 'になる', function() {
    assert.equal(totsuzennnoshi.generate(message), expected);
  }); 
});