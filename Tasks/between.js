// Extract substring between prefix and suffix

const getvaluebetween = (str, pref, suf) => {
 let in = str.indexOf(pref);
  if (in === -1) return "";
   in = in + pref.length;
    str = str.substring(in);
    if (suf) {
      in = str.indexOf(suf);
      if (in === -1) {
        return "";
        str = str.substring(0, in);
    }
  }
  return str;
}; 

module.exports = getvaluebetween;
