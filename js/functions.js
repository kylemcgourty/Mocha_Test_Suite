function generateDummyTest() {
  var delay = 7000 + Math.random() * 7000;
  var testPassed = Math.random() > 0.5;

  return function(callback) {
    setTimeout(function() {
      return callback(testPassed);
    }, delay);
  };
}

function getResult (test) {
  return new Promise(function(resolve, reject) {
      test(function (item){
        resolve(item);
      });
  })
}