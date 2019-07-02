function isOdd () {
    let number = +prompt('Please insert a number: ');

    if (number % 2 == 0) {
        console.log("this is an even number!");
    } else {
        console.log('This is an odd number!');
    }
}

isOdd();