// ЗАДАНИЕ 1

function random() {
	// body...
	var random_number = Math.floor((Math.random())*10+1);
	var guess=prompt("Введите число от 1 до 10",'');
	//alert(guess);
	if(guess==random_number){
		alert("Угадал(-а)");
	}
	else{alert("Повезет в следующий раз.Ответ:"+ random_number);}

}

// ЗАДАНИЕ 2

function palindrom(string) {
	// body...

	var arr=['1','2'];
	
	
	var i=0;
	for (var j=0;j<string.length;j++){
			if (string[j]!=' '){
				arr[i]=string[j];
				i++;
			}
		}
		//alert(arr);

	for (var i=0;i<arr.length;i++){

		if (arr[i]!=arr[string.length-1-i]){
			
			alert(string+" is Not a palindrom");
         
         break;}
         

        }

	}

	
	
		


random();
palindrom("qqasdfghqq");
palindrom("qa");
palindrom("qqasqq");




