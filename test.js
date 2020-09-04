const expect = require('chai').expect;
const getPairNumberFromColor = require("./getPairNumberFromColor.js");
const getColorFromPairNumber = require("./getColorFromPairNumber.js");


function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = getPairNumberFromColor(majorColor, minorColor);
    console.log(`${majorColor} ${minorColor} = ${pairNumber}`);
    expect(pairNumber).to.equal(expectedNumber);
}

function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = getColorFromPairNumber(number);

    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

module.exports = {testColorToNumber : testColorToNumber,
                testNumberToPair: testNumberToPair};
