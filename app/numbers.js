exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >> (bit - 1)) & 1;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let result = num.toString(2);
    const numMissingZeros = 8 - result.length;
    for (let i = 0; i < numMissingZeros; i++) {
      result = "0" + result;
    }
    return result;
  },

  multiply: function(a, b) {
    return (a*10) * (b*10) / 100;
  }
};
