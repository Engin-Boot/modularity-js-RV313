<<<<<<< HEAD
var getColorFromPairNumber = require("./getColorFromPairNumber.js");
function ToString()
=======
var GetColorFromPairNumber_reference = require("./getColorFromPairNumber.js");
function toString()
>>>>>>> 3aa71f1fe718040d8d522ffface01e44c4646453
{   
    console.log("Pin Number" + " " + " Major" + " " + "Minor");
    
    for(var i=1;i<=25;i++)
    {
<<<<<<< HEAD
        var color_pair =getColorFromPairNumber(i);
=======
        var color_pair =  GetColorFromPairNumber_reference.GetColorFromPairNumber(i);
>>>>>>> 3aa71f1fe718040d8d522ffface01e44c4646453
        console.log(i + "=" + "{" + color_pair.major + " , " + color_pair.minor + "}");
    }
    
}

module.export = toString;
