exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve) => {
      $.getJSON(url, (data) => {
        const names = data.people.map((person) => {
          return person.name;
        });
        names.sort();
        resolve(names);
      });

    });
  }
};
