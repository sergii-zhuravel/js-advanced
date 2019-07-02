let numbUser = prompt("Write number");

if(!isNaN(numbUser))
{
    if(!(numbUser % 2))
       console.log("Number is even");
    else console.log("Number is odd");
}
else console.log("It is not a number");