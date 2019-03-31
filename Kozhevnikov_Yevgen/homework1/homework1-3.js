var rawInput = prompt("введите слово или фразу");
var preparedString;

	function removeWhitespaces() {
		for(i=0;i<rawInput.length;i++){
			rawInput = rawInput.replace(" ", "");
			rawInput = rawInput.replace(",", "");
			rawInput = rawInput.replace("-", "");
		}
		preparedString = rawInput;
	}

	function checkForPolindrome(){
		if (preparedString === preparedString.split("").reverse().join("")){
			alert (preparedString + " является палиндромом :)");
		} else {
			alert (preparedString + " не является палиндромом :(");
		}
	}

removeWhitespaces();
checkForPolindrome();