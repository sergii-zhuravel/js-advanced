function pervoe_zadanie()
{
	var randomized = Math.floor(Math.random()*10);
var number = prompt('Enter the number from 1 to 10', randomized);
if(number == randomized)
	alert('You have made it');
else
	alert('Better luck next time');
}
pervoe_zadanie();
function vtoroje_zadanije()
{
	var first=parseInt(prompt(), 10);
	var second=parseInt(prompt(), 10);
	var action = prompt('Choose the action');
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
	var string = prompt('Enter the word');
string = string.replace(/\s/g, '');
function checker(string){
	var string2 = string.split('').reverse().join('');
	if(string == string2)
		alert('It is a polyndrome');
	else
		alert('It is not a polyndrome');
}
checker(string);
}
tretee_zadanie();