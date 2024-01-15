// Get month number

const getMonth = (input) => {
  const months = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun',
    'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
  ];
const lowerInput = input.toLowerCase();
  const index = months.findIndex(month => lowerInput.startsWith(month));
  }
 return index !== -1 ? index + 1 : -1;
};

module.exports = getMonth;
