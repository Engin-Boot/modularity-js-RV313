var {getMajorIndex,getMinorIndex} = require("./getMajorMinorIndex.js");
var {MajorColors,MinorColors} = require("./MajorMinor.js");

function getPairNumberFromColors(majorColor, minorColor) {
    let majorIndex=getMajorIndex(majorColor);
    let minorIndex=getMinorIndex(minorColor);
    return majorIndex * MinorColors.length + minorIndex + 1;
}

module.exports = getPairNumberFromColors;