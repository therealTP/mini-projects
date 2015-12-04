var closureTest = (function() {
	var counter = 0;
	console.log(counter);
	return function() {return counter += 1;}
});

closureTest();
closureTest();
closureTest();


var closureFunc = function(first, second) {
	var counter = 0;

}

function foo(num1, num2) {

	bar(3, 4);
	function bar(num3, num4) {
		console.log(num1, num2, num4);
	}

	return "Yippee!"
}

foo(2, 5);