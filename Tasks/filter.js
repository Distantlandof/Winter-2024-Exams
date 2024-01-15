// Filter array by type name

'use strict'; 

require('@ungap/structured-clone');

const Filter = (array, type) => {
  const res = [];
  
 for (const value of Object.values(array)) {
    if (typeof value === type) {
      res.push(structuredClone(value));
    }
  }
  return res;
};

module.exports = Filter;
