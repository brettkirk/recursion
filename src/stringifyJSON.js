// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //OBJECTS
  if(typeof(obj) === 'object' && obj !== null && Array.isArray(obj) == false){
    var output = [];
    for (var key in obj){
      if (obj[key] === undefined || typeof(obj[key]) === 'function'){
        continue;
      }
      output.push(stringifyJSON(key)+':'+stringifyJSON(obj[key]));
    }
    return '{'+output.join(',')+'}';
  }
  //STRING
  if(typeof(obj) === 'string'){
    return '"'+obj+'"';
  }
  //ARRAY
  if (Array.isArray(obj)){
    var output = [];
    for (var i = 0; i < obj.length; i++){
      output.push(stringifyJSON(obj[i]));
    }
    return '['+output.join(',')+']';
  }
  return String(obj);
};