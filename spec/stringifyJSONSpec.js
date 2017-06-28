// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    var stringifyJSON = function(obj) {
      var output = "{\"";

      //OBJECTS
      if (typeof(obj) === "object" && obj !== null && (Array.isArray(obj) == false)){
        for (var key in obj){
          if (obj.hasOwnProperty(key)){
            //UNDEFINED OBJECT
            if (obj[key] === undefined){
              return "{}";
            }
            output = output.concat(key);
            output = output.concat("\":");
            //NUMBER IN OBJ
            if ((Number.isFinite(obj[key])) || typeof(obj[key]) === "boolean" || obj[key] === null ){
              output = output.concat(obj[key]);
              //STRING IN OBJ
            } else if (typeof(obj[key]) === "string"){
              output = output.concat("\"");
              output = output.concat(obj[key]);
              output = output.concat("\"");
              //ARRAY IN OBJ
            } else if (Array.isArray(obj[key]) == true){
              output = output.concat("[");
              if (obj.length == 1 && Array.isArray(obj[key][0]) == false){
                if (typeof(obj[key][0]) === "string"){
                  output = output.concat("\"");
                  output = output.concat(obj[key][0]);
                  output = output.concat("\"");
                } else {
                  output = output.concat(obj[key][0]);
                }
                //LARGE ARRAY IN OBJ
              } else if (obj[key].length > 1 || Array.isArray(obj[key][0]) == true){
                for (var i = 0; i < obj[key].length; i++){
                  if (typeof(obj[key][i]) === "string"){
                  output = output.concat("\"");
                  output = output.concat(obj[key][i]);
                  output = output.concat("\"");
                } else if (Array.isArray(obj[key][i]) == true){
                  output = output.concat("[");
                  for (var j = 0; j < obj[key][i].length; j++){
                    if (typeof(obj[key][i][j]) === "string"){
                      output = output.concat("\"");
                      output = output.concat(obj[key][i][j]);
                      output = output.concat("\"");
                    } else if (Array.isArray(obj[key][i][j]) == true){
                      output = output.concat("[");
                      for (var k = 0; k < obj[key][i][j].length; k++){
                        if (typeof(obj[key][i][j][k]) === "string"){
                          output = output.concat("\"");
                          output = output.concat(obj[key][i][j][k]);
                          output = output.concat("\"");
                        } else if (Array.isArray(obj[key][i][j][k]) == true){
                          output = output.concat("[");
                          for (var l = 0; l < obj[key][i][j][k].length; l++){
                            if (typeof(obj[key][i][j][k][l]) === "string"){
                              output = output.concat("\"");
                              output = output.concat(obj[key][i][j][k][l]);
                              output = output.concat("\"");
                            } else if (Array.isArray(obj[key][i][j][k][l]) == true){
                              output = output.concat("[");
                              for (var m = 0; m < obj[key][i][j][k][l].length; m++){
                                //THIS IS SO INEFFICIENT BUT MY BRAIN IS FRIED AND I CANT COME UP WITH AN
                                //ELEGANT SOLUTION RIGHT NOW. :(
                              }
                              output = output.concat("]");
                            } else {
                              output = output.concat(",");
                              output = output.concat(obj[key][i][j][k][l]);
                            }
                          }
                          output = output.concat("]");
                        } else {
                          output = output.concat(",");
                          output = output.concat(obj[key][i][j][k]);
                        }
                      }
                      output = output.concat("]");
                    } else {
                      output = output.concat(",");
                      output = output.concat(obj[key][i][j]);
                    }
                  }
                  output = output.concat("]");
                } else {
                  output = output.concat(obj[key][i]);
                }
                output = output.concat(",");
                }
                output = output.slice(0, output.length - 1);
              }
              output = output.concat("]");
              //OBJECT IN OBJ
            } else if (typeof(obj[key]) === "object"){
              output = output.concat("{\"");
              if (typeof(obj[key]) === "object" && obj[key] !== null && (Array.isArray(obj[key]) == false)){
                for (var key2 in obj[key]){
                  if (obj[key].hasOwnProperty(key2)){
                    //UNDEFINED OBJECT
                    if (obj[key][key2] === undefined){
                      output = output.concat("{}");
                    }
                    output = output.concat(key2);
                    output = output.concat("\":");
                    //NUMBER IN OBJ
                    if ((Number.isFinite(obj[key][key2])) || typeof(obj[key][key2]) === "boolean" || obj[key][key2] === null ){
                      output = output.concat(obj[key][key2]);
                      //STRING IN OBJ
                    } else if (typeof(obj[key][key2]) === "string"){
                      output = output.concat("\"");
                      output = output.concat(obj[key][key2]);
                      output = output.concat("\"");
                      //ARRAY IN OBJ
                    } else if (Array.isArray(obj[key][key2]) == true){
                      output = output.concat("[");
                      if (obj[key].length == 1 && Array.isArray(obj[key][key2][0]) == false){
                        if (typeof(obj[key][key2][0]) === "string"){
                          output = output.concat("\"");
                          output = output.concat(obj[key][key2][0]);
                  output = output.concat("\"");
                } else {
                  output = output.concat(obj[key][key2][0]);
                }
                //LARGE ARRAY IN OBJ
              } else if (obj[key][key2].length > 1 || Array.isArray(obj[key][key2][0]) == true){
                for (var i = 0; i < obj[key][key2].length; i++){
                  if (typeof(obj[key][key2][i]) === "string"){
                  output = output.concat("\"");
                  output = output.concat(obj[key][key2][i]);
                  output = output.concat("\"");
                } else if (Array.isArray(obj[key][key2][i]) == true){
                  output = output.concat("[");
                  for (var j = 0; j < obj[key][key2][i].length; j++){
                    if (typeof(obj[key][key2][i][j]) === "string"){
                      output = output.concat("\"");
                      output = output.concat(obj[key][key2][i][j]);
                      output = output.concat("\"");
                    } else if (Array.isArray(obj[key][key2][i][j]) == true){
                      output = output.concat("[");
                      for (var k = 0; k < obj[key][key2][i][j].length; k++){
                        if (typeof(obj[key][key2][i][j][k]) === "string"){
                          output = output.concat("\"");
                          output = output.concat(obj[key][key2][i][j][k]);
                          output = output.concat("\"");
                        } else if (Array.isArray(obj[key][key2][i][j][k]) == true){
                          output = output.concat("[");
                          for (var l = 0; l < obj[key][key2][i][j][k].length; l++){
                            if (typeof(obj[key][key2][i][j][k][l]) === "string"){
                              output = output.concat("\"");
                              output = output.concat(obj[key][key2][i][j][k][l]);
                              output = output.concat("\"");
                            } else if (Array.isArray(obj[key][key2][i][j][k][l]) == true){
                              output = output.concat("[");
                              for (var m = 0; m < obj[key][key2][i][j][k][l].length; m++){
                                //THIS IS SO INEFFICIENT BUT MY BRAIN IS FRIED AND I CANT COME UP WITH AN
                                //ELEGANT SOLUTION RIGHT NOW. :(
                              }
                              output = output.concat("]");
                            } else {
                              output = output.concat(",");
                              output = output.concat(obj[key][key2][i][j][k][l]);
                            }
                          }
                          output = output.concat("]");
                        } else {
                          output = output.concat(",");
                          output = output.concat(obj[key][key2][i][j][k]);
                        }
                      }
                      output = output.concat("]");
                    } else {
                      output = output.concat(",");
                      output = output.concat(obj[key][key2][i][j]);
                    }
                  }
                  output = output.concat("]");
                } else {
                  output = output.concat(obj[key][key2][i]);
                }
                output = output.concat(",");
                }
                output = output.slice(0, output.length - 1);
              }
              output = output.concat("]");
            } else if (typeof(obj[key][key2]) === "object"){
              output = output.concat("X");

            }
            output = output.concat(",\"");
          }
        }
        if (output.endsWith(",\"")){
          output = output.slice(0,output.length - 2);
        } else if (output.endsWith("{\"")){
          output = output.slice(0,output.length - 1);
        }
        output = output.concat("}");
}
            }
            output = output.concat(",\"");
          }
        }
        output = output.slice(0,output.length - 2);
        output = output.concat("}");
        //NUMBERS
      } else if (Number.isFinite(obj) || obj === null || (typeof(obj) === "boolean")){
        output = String(obj);
        //STRINGS
      } else if (typeof(obj) === "string"){
        output = "\"";
        output = output.concat(obj);
        output = output.concat("\"");
        //ARRAYS
      } else if (Array.isArray(obj) == true){
        output = "["
        if (obj.length == 1 && Array.isArray(obj[0]) == false){
          if (typeof(obj[0]) === "string"){
            output = output.concat("\"");
            output = output.concat(obj[0]);
            output = output.concat("\"");
          } else {
            output = output.concat(obj[0]);
          }
          //LARGE ARRAYS
        } else if (obj.length > 1 || Array.isArray(obj[0]) == true){
          for (var i = 0; i < obj.length; i++){
            //STRINGS IN ARR
            if (typeof(obj[i]) === "string"){
            output = output.concat("\"");
            output = output.concat(obj[i]);
            output = output.concat("\"");
            //OBJECT IN ARR
          } else if (typeof(obj[i]) === "object" && Array.isArray(obj[i]) == false){
            output = output.concat("{\"");
            for (var key in obj[i]){
              if (obj[i].hasOwnProperty(key)){
                //UNDEFINED OBJECT
                if (obj[i][key] === undefined){
                  output = output.concat("{}");
                }
                output = output.concat(key);
                output = output.concat("\":");
                //NUMBER IN OBJ
                if ((Number.isFinite(obj[i][key])) || typeof(obj[i][key]) === "boolean" || obj[i][key] === null ){
                  output = output.concat(obj[i][key]);
                  //STRING IN OBJ
                } else if (typeof(obj[i][key]) === "string"){
                  output = output.concat("\"");
                  output = output.concat(obj[i][key]);
                  output = output.concat("\"");
                }
                output = output.concat(",\"");
              }
            }
            output = output.slice(0,output.length - 2);
            output = output.concat("}");
            //NESTED ARRAYS IN ARR
          } else if (Array.isArray(obj[i]) == true){
            output = output.concat("[");
            for (var j = 0; j < obj[i].length; j++){
              if (typeof(obj[i][j]) === "string"){
                output = output.concat("\"");
                output = output.concat(obj[i][j]);
                output = output.concat("\"");
              } else if (Array.isArray(obj[i][j]) == true){
                output = output.concat("[");
                for (var k = 0; k < obj[i][j].length; k++){
                  if (typeof(obj[i][j][k]) === "string"){
                    output = output.concat("\"");
                    output = output.concat(obj[i][j][k]);
                    output = output.concat("\"");
                  } else if (Array.isArray(obj[i][j][k]) == true){
                    output = output.concat("[");
                    for (var l = 0; l < obj[i][j][k].length; l++){
                      if (typeof(obj[i][j][k][l]) === "string"){
                        output = output.concat("\"");
                        output = output.concat(obj[i][j][k][l]);
                        output = output.concat("\"");
                      } else if (Array.isArray(obj[i][j][k][l]) == true){
                        output = output.concat("[");
                        for (var m = 0; m < obj[i][j][k][l].length; m++){
                          //THIS IS SO INEFFICIENT BUT MY BRAIN IS FRIED AND I CANT COME UP WITH AN
                          //ELEGANT SOLUTION RIGHT NOW. :(
                        }
                        output = output.concat("]");
                      } else {
                        output = output.concat(",");
                        output = output.concat(obj[i][j][k][l]);
                      }
                    }
                    output = output.concat("]");
                  } else {
                    output = output.concat(",");
                    output = output.concat(obj[i][j][k]);
                  }
                }
                output = output.concat("]");
              } else {
                output = output.concat(",");
                output = output.concat(obj[i][j]);
              }
            }
            output = output.concat("]");
          } else {
            output = output.concat(obj[i]);
          }
          output = output.concat(",");
          }
          output = output.slice(0, output.length - 1);
        }
        output = output.concat("]");
      }
      //EMPTY OBJECTS
      if (output == "}"){
        return "{}"
      } else {
        return output;
      };
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







   
                  output = output.concat("\"");   
                  output = output.concat(obj[i][j][k]);
                  output = output.concat("\"");   
