// Extract substring between prefix and suffix

'use strict';

const getvaluebetween = (str, pref, suf) => {

 const firstPos = str.indexOf(prefix) + 1;
  const lastPos = str.indexOf(suffix);
  if (firstPos === -1 || lastPos === -1) {
        return "";
  }
  return str.substring(firstPos, lastPos);
}; 

module.exports = getvaluebetween;
