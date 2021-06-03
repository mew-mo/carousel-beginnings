(function() {

  'use strict';
  // All timer code
  var location = {
    b: '../aqua/index.html'
  };

  // Load a new page
  console.log('B working');
  setTimeout(function() {
    window.location = location.b;
  }, 3600000)

}());
