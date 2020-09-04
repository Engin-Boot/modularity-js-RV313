const expect = require('chai').expect;

var {testColorToNumber,testNumberToPair} = require("./test.js");

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);

var ToString = require("./ToString.js");
ToString();