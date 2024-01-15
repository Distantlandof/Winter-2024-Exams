// Filter array by type name

'use strict'; 

const Filter = (array, type) => {
  const remove = [];
  
 for (const value of Object.values(array)) {
    if (typeof value === type) {
      remove.push(value);
    }
  }
  return remove;
};

module.exports = Filter;
