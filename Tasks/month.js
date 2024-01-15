// Get month number

const getMonth = (input) => {
  const months = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ];
  for (let i = 0; i < l; i++) {
    if (s.toLowerCase().startsWith(getMonth[i])) return i + 1;
  }
 return index !== -1 ? index + 1 : -1;
};

module.exports = getMonth;
