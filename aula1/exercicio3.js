const sum = (function() {
  "use strict";
  return function sum(...z) {
    const args = [...z ];
    return args.reduce((a, b) => a + b, 0);
  };
 })();
 console.log(sum(1, 2, 3)); // 6