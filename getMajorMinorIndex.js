var {MajorColors,MinorColors} = require("./MajorMinor.js");

function getMajorIndex(majorColor){
    
    for(var majorIndex = MajorColors.length; majorIndex >= 0; majorIndex--) {
        if(MajorColors[majorIndex] == majorColor) {
            break;
        }
    }
    return majorIndex;
       
}

function getMinorIndex(minorColor){
    
    for( var minorIndex = MinorColors.length; minorIndex >= 0; minorIndex--) {
        if(MinorColors[minorIndex] == minorColor) {
            break;
        }
    }
    return minorIndex;
}

module.exports = { getMajorIndex : getMajorIndex,
                    getMinorIndex : getMinorIndex};