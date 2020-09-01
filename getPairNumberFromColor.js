var getMajorMinorIndex_reference = require("./getMajorMinorIndex.js");
var MajorMinor_reference = require("./MajorMinor.js");

function getPairNumberFromColors(majorColor, minorColor) {
    let majorIndex=getMajorMinorIndex_reference.getMajorIndex(majorColor);
    let minorIndex=getMajorMinorIndex_reference.getMinorIndex(minorColor);
    return majorIndex * MajorMinor_reference.MinorColors.length + minorIndex + 1;
}

module.exports = getPairNumberFromColors;