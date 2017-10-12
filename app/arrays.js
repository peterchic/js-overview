exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    var sum = 0
    arr.forEach( num => sum += num)
    return sum
  },

  remove: function(arr, item) {
    return arr.filter( num => {return num != item})
  },

  removeWithoutCopy: function(arr, item) {
    for(var i=arr.length - 1; i >=0; i--){
    if(arr[i] === item){
      arr.splice(i, 1)
    }
  }
  return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate: function(arr) {
    return arr.slice(0,-1)
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    return arr.slice(1)
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    let count = 0
    arr.forEach( num => {if(num === item) count++})
    return count
  },

  duplicates: function(arr) {
    let original = [],
             dup = []

  for(var i = 0; i < arr.length; i++){
    if(!original.includes(arr[i])){
      original.push(arr[i])
    } else {
      if(!dup.includes(arr[i]))
      dup.push(arr[i])
    }
  }
  return dup
  },

  square: function(arr) {
    return arr.map( num => {return num * num})
  },

  findAllOccurrences: function(arr, target) {
    var occs = [];
       for(var i=0;arr.length > i;i++){
         if(arr[i] === target){
          occs.push(i);
         }
       }
       return occs;
    }
  };
