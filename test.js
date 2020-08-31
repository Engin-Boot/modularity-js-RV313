

var GetPairNumberFromColors_reference = require("./getPairNumberFromColors.js");
var GetColorFromPairNumber_reference = require("./getColorFromPairNumber.js");
const expect = require('chai').expect;

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = GetPairNumberFromColors_reference.GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = GetColorFromPairNumber_reference.GetColorFromPairNumber(number);

    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

module.exports = {testColorToNumber,testNumberToPair};
