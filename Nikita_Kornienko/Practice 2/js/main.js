function isOdd () {
    let number = +prompt('Please insert a number: ');

    if (number % 2) {
        console.log("this is an odd number!");
    } else {
        console.log('This is an even number!');
    }
}

isOdd();