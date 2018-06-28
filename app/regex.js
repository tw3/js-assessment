exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([A-Za-z])\1/.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    const matches = str.match(/\d{3}/);
    return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {
    return /^\d\d\d-\d\d\d-\d\d\d\d$/.test(str);
  },

  isUSD: function(str) {
    return /^\$\d{1,3}((,\d{3})+)?(\.\d\d)?$/.test(str);
  }
};
