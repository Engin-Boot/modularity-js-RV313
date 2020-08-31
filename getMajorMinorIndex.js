var MajorMinor_reference = require("./MajorMinor.js");

function getMajorIndex(majorColor){
    
    for(var majorIndex = MajorMinor_reference.MajorColors.length; majorIndex >= 0; majorIndex--) {
        if(MajorColors[majorIndex] == majorColor) {
            break;
        }
    }
    return majorIndex;
       
}

function getMinorIndex(minorColor){
    
    for( var minorIndex = MajorMinor_reference.MinorColors.length; minorIndex >= 0; minorIndex--) {
        if(MinorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return minorIndex;
}

module.exports = { getMajorIndex,getMinorIndex};