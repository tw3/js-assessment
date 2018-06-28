exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const resultFiles = [];
    const isAnyDir = (dirName == null);
    
    for (let i = 0; i < data.files.length; i++) {
      const dataFile = data.files[i];
      const isDirMatch = (data.dir === dirName);
      const isFile = (typeof dataFile === "string");
      if (isFile) {
        if (isAnyDir || isDirMatch) {
          const fileName = dataFile;
          resultFiles.push(fileName);
        }
      } else {
        const newData = dataFile;
        const newDirName = (isAnyDir || !isDirMatch) ? dirName : newData.dir;
        const childFiles = this.listFiles(newData, newDirName);
        resultFiles.push(...childFiles);
      }
    }
    return resultFiles;
  },

  permute: function(arr) {
    const results = [];
    const len = arr.length;
    if (len < 2) {
      return arr;
    }
    if (len === 2) {
      const newArr = [arr[1], arr[0]];
      return [arr, newArr];
    }
    for (let i = 0; i < arr.length; i++) {
      const subArr = arr.slice(0);
      const splicedItem = subArr.splice(i, 1)[0];
      const subResults = this.permute(subArr);
      for (let j = 0; j < subResults.length; j++) {
        const subResult = subResults[j];
        const newResult = [splicedItem, ...subResult];
        results.push(newResult);
      }
    }
    return results;
  },

  fibonacci: function(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    if (n === 1) {
      return ["()"];
    }

    const results = [];
    const subResults = this.validParentheses(n - 1);
    for (let i = 0; i < subResults.length; i++) {
      const validSubResult = subResults[i];

      const newResult1 = "(" + validSubResult + ")";
      results.push(newResult1);

      const newResult2 = "()" + validSubResult;
      if (!results.includes(newResult2)) {
        results.push(newResult2);
      }

      const newResult3 = validSubResult + "()";
      if (!results.includes(newResult3)) {
        results.push(newResult3);
      }
    }
    return results;
  }
};
