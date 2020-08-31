var GetColorFromPairNumber_reference = require("./getColorFromPairNumber.js");
function toString()
{   
    console.log("Pin Number" + " " + " Major" + " " + "Minor");
    
    for(var i=1;i<=25;i++)
    {
        var color_pair =  GetColorFromPairNumber_reference.GetColorFromPairNumber(i);
        console.log(i + "=" + "{" + color_pair.major + " , " + color_pair.minor + "}");
    }
    
}

module.export = toString;