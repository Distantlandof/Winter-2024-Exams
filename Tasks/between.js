// Extract substring between prefix and suffix

'use strict';

const getvaluebetween = (str, pref, suf) => {
 let subt
 const firstPos = str.indexOf(prefix) + 1;
  const lastPos = str.indexOf(suffix);
  if (firstPos === -1 || lastPos === -1) {
      if (in === -1) {
        return "";
       subt = str.substring(firstPos, lastPos);
    }
  }
  return subt;
}; 

module.exports = getvaluebetween;
