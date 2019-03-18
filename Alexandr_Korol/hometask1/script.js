// Задание 1 выполнено в целом правильно но не точно соблюдены требования к заданию (невнимательно)
function pervoe_zadanie()
{
	var randomized = Math.floor(Math.random()*10);
	// вернет от 0 до 9, а в задании указано от 1 до 10
	// Math.floor(Math.random() * 9) + 1
	
var number = prompt('Введите число от 1 до 10', randomized);
if(number == randomized)
	alert('Угадал');
else
	alert('Повезет в следующий раз');
	// В задании указано вывести загаданное число
}
pervoe_zadanie();

// Задание 2 выполнено в целом правильно но не точно соблюдены требования к заданию (невнимательно)
function vtoroje_zadanije()
{
	var first=parseInt(prompt('Введите первое число'), 10);
	var second=parseInt(prompt('Введите второе число'), 10);
	var action = prompt('Выберите действие');
	// в задании сказано сделать в HTML поля для ввода, а не запрашивать с помощью prompt
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
	// в данном случае удобнее использовать конструкцию switch case
}
vtoroje_zadanije();

// Задание 3 выполнено правильно
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
// лучше чтобы ф-ция checker возвращала true или false
// надо стараться отделять логику от визуального отображения 
// alert(checker(string) ? "Это полиндром" : "Это не полиндром");
checker(string);
}
tretee_zadanie();