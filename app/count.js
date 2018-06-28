exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let num = start;
    const cb = () => {
      console.log(num);
      if (start > end) {
        num--;
      } else {
        num++;
      }
      if (num < start || num > end) {
        clearInterval(timer);
      }
    };
    cb();
    const timer = setInterval(cb, 100);

    return {
      cancel: () => {
        clearInterval(timer);
      }
    }
  }
};