var { MajorColors, MinorColors } = require("./MajorMinor.js");

function getColorFromPairNumber(pairNumber) {
    let colorPair = {};
    var zeroBasedPairNumber = pairNumber - 1;
    var majorColorIndex = Math.floor(zeroBasedPairNumber / MinorColors.length);
    colorPair.major = MajorColors[majorColorIndex];
    colorPair.minor = MinorColors[zeroBasedPairNumber % MinorColors.length];
    return colorPair
}

module.exports = getColorFromPairNumber;