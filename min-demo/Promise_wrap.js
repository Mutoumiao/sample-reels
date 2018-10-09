if (!Promise.wrap) {
  Promise.wrap = function(fn) {
    return function() {
      var args = [].slice.call(arguments);
      return new Promise(function(resolve, reject) {
        fn.apply(
          null,
          args.concat(function(err, v) {
            if (err) {
              reject(err);
            } else {
              resolve(v);
            }
          })
        );
      });
    };
  };
}
var request = Promise.wrap(ajax);
function foo(x, y, cd) {
  request(`http://some.url./?x=${x}&y=${y}`).then(function fulfilled(text) {
    cd(null, text);
  }, cd);
}
var betterFoo = Promise.wrap(foo);
betterFoo(11, 31).then(
  function fulfilled(text) {
    console.log(text);
  },
  function rejected(err) {
    console.error(err);
  }
);
