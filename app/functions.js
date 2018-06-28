exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return (str2) => {
      return `${str}, ${str2}`;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(item => {
      const closure = (x) => fn(x);
      return () => closure(item);
    });
  },

  partial: function(fn, str1, str2) {
    return (x) => {
      return fn(str1, str2, x);
    }
  },

  useArguments: function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    const args = Array.prototype.slice.call(arguments, 1);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    const args = Array.prototype.slice.call(arguments, 1);
    if (args == null) {
      args = [];
    }
    const newFunction = function() {
      for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      return fn.apply(null, args);
    }
    return newFunction;
  },

  curryIt: function(fn) {
    return (a) => {
      return (b) => {
        return (c) => {
          return fn(a, b, c);
        }
      }
    }
  }
};
