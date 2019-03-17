var usersCount = +prompt(`Welcom to our game!!!
Enter the count what we wished for (range 1 to 10)`);

function createRandomCount(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
var randomNumber = createRandomCount(1, 10);

function runGuessTheCount() {
  if (usersCount === randomNumber) {
    alert(
      `Congratulations!!!!
        YOU GUESS,
        the number was:
        ` + randomNumber
    );
  } else {
    alert(
      `SORRY!!!! YOU LOSE!!
        The number was: ` + randomNumber
    );
  }
}
runGuessTheCount();
