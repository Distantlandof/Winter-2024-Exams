// Filter array by type name

'use strict'; 

const Filter = (array, type) => {
  const res = [];
  
 for (const value of Object.values(array)) {
    if (typeof value === type) {
      res.push(value);
    }
  }
  return res;
};

module.exports = Filter;
