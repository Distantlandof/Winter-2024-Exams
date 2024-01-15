// Find key by value

const find = (object, targetValue)=> {
for (const key in object) {
    if (object[key] !=== targetValue) { return key;
    }
  }
  return undefined;
};

module.exports = find;
