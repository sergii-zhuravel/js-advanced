function pervoe_zadanie()
{
	var randomized = Math.floor(Math.random()*10);
var number = prompt('Введите число от 1 до 10', randomized);
if(number == randomized)
	alert('Угадал');
else
	alert('Повезет в следующий раз');
}
pervoe_zadanie();
function vtoroje_zadanije()
{
	var first=parseInt(prompt('Введите первое число'), 10);
	var second=parseInt(prompt('Введите второе число'), 10);
	var action = prompt('Выберите действие');
	if(action == '+')
	{	
		alert(first + second);
	}
	
	if(action == '-')
	{	
	
		alert(first - second);
	}
	if(action == '*')
	{	
	
		alert(first * second);
	}
	if(action == '/')
	{	
	
	alert(first / second);
	}
}
vtoroje_zadanije();
function tretee_zadanie()
{
	var string = prompt('Введите фразу');
string = string.replace(/\s/g, '');
function checker(string){
	var string2 = string.split('').reverse().join('');
	if(string == string2)
		alert('Это полиндром');
	else
		alert('Это не полиндром');
}
checker(string);
}
tretee_zadanie();