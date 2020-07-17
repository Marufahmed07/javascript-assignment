//feetToMile
function feetToMile(feet){
var mile= feet/5280;
return mile;
}
var result = feetToMile(21160);
 console.log(result);


// woodCalculator
function woodCalculator(Chair,table,bed) {
    var ChairCount= Chair*1;
    var tableCount= table*3;
    var bedCount = bed*5;
    var totalWood= ChairCount+tableCount+bedCount;
    return totalWood;
}
var result =  woodCalculator(5,7,9);
 console.log(result);

// tinyFriends
function tinyFriends(myFriends) {
    var smallestFridend = myFriends[0];
    for (i = 0; i < myFriends.length; i++) {
        if (myFriends[i] < smallestFridend) {
            smallestFridend = myFriends[i];
        }
    }
    return smallestFridend;
}
var result =  tinyFriends(["Jabir","Asif","Ali"]);
 console.log(result);

//brickCalculator
//function brickCalculator (){}