/*************************************************************
Assert throws a flag on tested modules if false (Unit testing)
if True nothing happens
*************************************************************/

var assert = require("assert");
var math = require("./math");

assert(math.add(8, 4) == 12);
assert(math.sub(8, 4) == 4);
assert(math.div(8, 4) == 2);
assert(math.mul(8, 4) == 32);
assert(math.mod(8, 4) == 0);

console.log("All tests passed!")
