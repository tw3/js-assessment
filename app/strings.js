exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let newStr = '';
    let prevChar;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === prevChar) {
        if (count < amount) {
          newStr += char;
          count++;
        }
      } else {
        newStr += char;
        prevChar = char;
        count = 1;
      }
    }
    return newStr;
  },

  wordWrap: function(str, cols) {
    let newStr = '';
    const words = str.split(" ");
    let lineLen = 0;
    let delim = "\n";
    words.forEach(word => {
      const wordLen = word.length;
      if (lineLen === 0) {
        newStr += word;
        lineLen = wordLen + 1;
        return;
      }
      const newLineLen = lineLen + wordLen;
      const wouldBeTooLong = (newLineLen > cols);
      if (wouldBeTooLong) {
        newStr += delim + word;
        lineLen = wordLen + 1;
      } else {
        newStr += " " + word;
        lineLen = newLineLen + 1;
      }
    });
    return newStr;
  },

  reverseString: function(str) {
    let newStr = '';
    const len = str.length;
    for (let i = (len - 1); i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  }
};
