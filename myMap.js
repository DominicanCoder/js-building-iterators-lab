// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {

	//create a new array, empty!
	var cup = [];


	//for loop
	for(var i=0; i < arr.length; i++){
		//invoke the function they give with the current array item
		//get the value that the function gives us
		var currentReturnValue = callback(arr[i],i);
		//console.log("this is the current value: " + currentReturnValue);
		//put value in the new array
		cup.push(currentReturnValue);
	}
	//return the new array	
return cup;

}


var myExampleArray = ["a", "b", "c", "d"];

var newarray = myMap(myExampleArray, function printer(currentValueInArray, currentIndex) {
	return currentValueInArray + " !!!!! " + currentIndex;
	//console.log(currentValueInArray + " !!!!! " + currentIndex);
});
console.log(newarray);
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
