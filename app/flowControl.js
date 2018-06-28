exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    if (num == null || isNaN(num)) {
      return false;
    }
    const isDiv3 = (num % 3 === 0);
    const isDiv5 = (num % 5 === 0);
    if (isDiv3 && isDiv5) {
      return 'fizzbuzz'
    }
    if (isDiv3) {
      return 'fizz';
    }
    if (isDiv5) {
      return 'buzz';
    }
    return num;
  }
};
