
var getColorFromPairNumber = require("./getColorFromPairNumber.js");
function ToString()
{   
    console.log("Pin Number" + " " + " Major" + " " + "Minor");
    
    for(var i=1;i<=25;i++)
    {
        var color_pair =getColorFromPairNumber(i);

        console.log(i + "=" + "{" + color_pair.major + " , " + color_pair.minor + "}");
    }
    
}

module.export = ToString;
