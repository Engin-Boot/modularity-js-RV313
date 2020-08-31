const expect = require('chai').expect;

var test_reference = require("./test.js");
var toString_reference = require("./ToString.js");
toString();

console.log("color coder");
test_reference.testNumberToPair(4, "white", "brown");
test_reference.testNumberToPair(25, "violet", "slate");
test_reference.testColorToNumber("black", "brown", 14);
test_reference.testColorToNumber("yellow", "green", 18);
