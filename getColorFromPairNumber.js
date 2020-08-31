var MajorMinor_reference = require("./MajorMinor.js");

function GetColorFromPairNumber(pairNumber) {
    let colorPair = {};
    const zeroBasedPairNumber = pairNumber - 1;
    const majorColorIndex =
        Math.floor(zeroBasedPairNumber / MajorMinor_reference.MinorColors.length);
    colorPair.major = MajorMinor_reference.MajorColors[majorColorIndex];
    colorPair.minor = MajorMinor_reference.MinorColors[zeroBasedPairNumber % MajorMinor_reference.MinorColors.length];
    return colorPair
}

module.export = GetColorFromPairNumber;