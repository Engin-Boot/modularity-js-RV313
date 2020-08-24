const expect = require('chai').expect;

const MajorColors = [
    "white",
    "red",
    "black",
    "yellow",
    "violet"
];

const MinorColors = [
    "blue",
    "orange",
    "green",
    "brown",
    "slate"
];

var get_Color_Reference = require("./get_Color_Pair.js");
var get_Pair_Reference = require("./get_Color_Pair.js");

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = get_Pair_Reference(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = get_Color_Reference(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);
