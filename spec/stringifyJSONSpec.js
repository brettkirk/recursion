// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

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
      
    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });
});