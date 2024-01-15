// Extract substring between prefix and suffix

getvaluebetween = (str, p, s) => {
  i = str.indexOf(p);
  if (i === -1) return '';
    k = i + p.length;
    str = str.substring(k);
    if (s) {
      i = str.indexOf(s);
      if (i === -1) {
        return '';
        str = str.substring(0, i);
    }
  }
  return str;
}; 

module.exports = getvaluebetween;
