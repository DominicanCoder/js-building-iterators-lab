// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach

console.log("running!");

function myEach(arrayPassedIn, functionPassedIn) {

	//use the function that was passed in on each item in the
	//  array.
	for(var i=0; i < arrayPassedIn.length; i++){
		functionPassedIn(arrayPassedIn[i], i, arrayPassedIn);
	}
}

var myExampleArray = ["a", "b", "c", "d"];

myEach(myExampleArray, function printer(currentValueInArray, currentIndex) {
	console.log(currentValueInArray + " " + currentIndex);
});

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myEach;
