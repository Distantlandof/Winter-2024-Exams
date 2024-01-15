// Get month number

const getMonth = (input) => {
  const months = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ];
getMonth = (s) => {
  l = getMonth.length;
  for (let i = 0; i < l; i++) {
    if (s.toLowerCase().startsWith(getMonth[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonth;
