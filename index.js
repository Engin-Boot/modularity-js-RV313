const expect = require('chai').expect;


var get_Reference = require("./get_Color_Pair.js");
const {ToString} = require("./PairPrint.js");
const{ testColorToNumber,testNumberToPair} = require("./test.js");

ToString();


console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);




