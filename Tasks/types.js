// Count types in an array

'use strict';

const coutypes = function (array) {
const typesinar = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const  key of array) {
    const type = typeof key;
    typesinar[type]++;
  }
  return typesinar ;
};

module.exports = coutypes ;
