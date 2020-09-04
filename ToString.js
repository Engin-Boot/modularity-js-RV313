
var { MajorColors, MinorColors } = require("./MajorMinor.js");
var getColorFromPairNumber = require("./getColorFromPairNumber.js");
function ToString()
{   
    var color_pair_sequence= {};
    console.log("Pin Number" + " " + " Major" + " " + "Minor");
    
    for(var pinNumber=1 ; pinNumber<=MinorColors.length*MajorColors.length ; pinNumber++)
    {
        color_pair_sequence =getColorFromPairNumber(pinNumber);

        console.log(pinNumber + "=" + "{" + color_pair_sequence.major + " , " + color_pair_sequence.minor + "}");
    }
    
}

module.exports = ToString;
