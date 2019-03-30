var compChoise = Math.floor(Math.random() * 10) + 1;
var userChoise = +prompt("введите число 1-10");

	function compareChoises (){
		if (compChoise === userChoise){
			alert("угадал!");
		} else {
			alert("повезет в следующий раз :) загаданное число было " + compChoise);
		}
	}

compareChoises();