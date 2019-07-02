// 3. Написать функцию которая определяет является ли слово или 
// фраза (без учета пробелов) палиндромом

// Пример палиндрома - топот, nurses run

var string = prompt('Введи слово или фразу');

function palin (str) {
    var string2 = str.replace(/ /g,'').toLowerCase().split('').reverse().join('');
    
    var string3 = str.replace(/ /g,'').toLowerCase();

    if (string2 == string3){
        alert('Слово / Фраза ' + string + ' - палиндром');
    } else {
        alert('Слово / Фраза ' + string + ' - не палиндром');

    }

}

palin(string);

