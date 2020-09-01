var Major_reference = require("./MajorMinor.js").MajorColors;
var Minor_reference = require("./MajorMinor.js").MinorColors;
function getMajorIndex(majorColor){
    
    for(var majorIndex = Major_reference.length; majorIndex >= 0; majorIndex--) {
        if(Major_reference[majorIndex] == majorColor) {
            break;
        }
    }
    return majorIndex;
       
}

function getMinorIndex(minorColor){
    
    for( var minorIndex = Minor_reference.length; minorIndex >= 0; minorIndex--) {
        if(Minor_reference[minorIndex] == minorColor) {
            break;
        }
    }
    return minorIndex;
}

module.exports = { getMajorIndex,getMinorIndex};