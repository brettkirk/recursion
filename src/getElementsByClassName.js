// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = document.getElementsByTagName("*");
  var elementList = [];
  var currentElement;

    for (var i = 0; i < elements.length; i++){
    currentElement = elements[i];
    if (currentElement.className.search(className) !== -1){
      elementList.push(currentElement);
    }
  }
  return elementList;
};
