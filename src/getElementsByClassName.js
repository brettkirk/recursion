// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentElement) {
  var elementList = [];
  currentElement = currentElement || document.body;

  var parts = currentElement.className.split(' ');
  if (parts.indexOf(className) !== -1){
    elementList.push(currentElement);
  };

  for (var i = 0; i < currentElement.children.length; i++){
    var results = getElementsByClassName(className, currentElement.children[i]);
    elementList = elementList.concat(results);
  }
  return elementList;
};
