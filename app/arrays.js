exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum: function(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  },

  remove: function(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        continue;
      }
      newArr.push(arr[i]);
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    const newArr = arr1.splice(0);
    for (let i = 0; i < arr2.length; i++) {
      newArr.push(arr2[i]);
    }
    return newArr;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    const uniqueValCounts = {};
    let dupes = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (uniqueValCounts.hasOwnProperty(item)) {
        uniqueValCounts[item]++;
        if (uniqueValCounts[item] === 2) {
          dupes.push(item);
        }
      } else {
        uniqueValCounts[item] = 1;
      }
    }
    return dupes;
  },

  square: function(arr) {
    return arr.map(item => item * item);
  },

  findAllOccurrences: function(arr, target) {
    const idxArray = [];
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item === target) {
        idxArray.push(i);
      }
    }
    return idxArray;
  }
};
