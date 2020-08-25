const expect = require('chai').expect;


var get_Reference = require("./get_Color_Pair.js");

function ToString()
{   
    console.log("Pin Number" + " " + " Major" + " " + "Minor");
    
    for(var i=1;i<=25;i++)
    {
        var color_pair =  get_Reference.GetColorFromPairNumber(i);
        console.log(i + "=" + "{" + color_pair.major + " , " + color_pair.minor + "}");
    }
    
}
ToString();


function testNumberToPair(number, expectedMajor, expectedMinor) {
    const pairOfColors = get_Reference.GetColorFromPairNumber(number);
    console.log(`${number} = ${expectedMajor} ${expectedMinor}`);
    expect(pairOfColors.major).equals(expectedMajor);
    expect(pairOfColors.minor).equals(expectedMinor);
}

function testColorToNumber(majorColor, minorColor, expectedNumber) {
    const pairNumber = get_Reference.GetPairNumberFromColors(majorColor, minorColor);
    console.log(`${pairNumber} = ${majorColor} ${minorColor}`);
    expect(pairNumber).to.equal(expectedNumber);
}

console.log("color coder");
testNumberToPair(4, "white", "brown");
testNumberToPair(25, "violet", "slate");
testColorToNumber("black", "brown", 14);
testColorToNumber("yellow", "green", 18);
