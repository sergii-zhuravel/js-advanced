let user_numb = +prompt("Number from 1 to 10");

let Guess = ((numb) => {
   let pc_numb = Math.round(Math.random() * 10);
   if(pc_numb == numb)
      alert("You guessed right!");
   else alert("You guessed wrong!");
});

Guess(user_numb);