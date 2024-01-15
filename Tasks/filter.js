// Filter array by type name

'use strict'; 

const Filter = (array, type) => {
  const remove = [];
  
 for (const [key, value] of Object.entries(array)) {
    if (typeof value !== type) {
      remove.unshift(key);
    }
  }
 for (const x of remove) array.splice(x, 1);
  return array;
};

module.exports = Filter;
