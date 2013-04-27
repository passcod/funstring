'use strict';

module.exports = function(func, nm) {
  var s = func.toString().match(/^function([^(]*)\(([^)]*)\)[^\{]*\{(.*)\}/);
  if (!nm) {
    nm = s[1].replace(/ /g,'');
    if (nm.length === 0) {
      nm = 'anonymous';
    }
  }
  return '(function ' + nm + '(' + s[2].trim() +  ') { ' + s[3].trim() + ' })';
};
