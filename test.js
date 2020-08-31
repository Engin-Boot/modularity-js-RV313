var get_Reference = require("./get_Color_Pair.js");

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = get_Reference.GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${pairNumber} = ${majorColor} ${minorColor}`);
    expect(pairNumber).to.equal(expectedNumber);
}
function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = get_Reference.GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}



module.exports = {testColorToNumber : testColorToNumber,
                testNumberToPair : testNumberToPair};
