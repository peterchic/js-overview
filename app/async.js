exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
       resolve(value)
    })
  },

  manipulateRemoteData: function(url) {
    return new Promise( (resolve, reject) => {
      $.get(url).done( data => {
        var resData = data.people.map( person => {
          return person.name
        }).sort();
        resolve(resData)
      })
    })
  }
};
