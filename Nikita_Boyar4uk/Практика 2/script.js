
// Получить число
// Вывести на консоль 


var user = prompt('Введи число');

if (user % 2 == 0){
    console.log('Четнное');
} else if (isNaN(user)) {
    console.log('необходимо ввести число');
}  else {
    console.log('НЕ четное');
}
