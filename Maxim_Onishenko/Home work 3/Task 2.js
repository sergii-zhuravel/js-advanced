
function applyAll() {
    func = arguments[0];
    argsArr = [].slice.call(arguments, 1);
    return func.apply(func, argsArr);
}

// Проверяем код
console.log(applyAll(Math.max, 2, -2, 3)); // 3
alert(applyAll(Math.min, 2, -2, 3)); // -2
console.log(applyAll(sum, 1, 2, 3)); // -> sum(1, 2, 3) = 6
console.log(applyAll(mul, 2, 3, 4)); // -> mul(2, 3, 4) = 24



//Функции предопределенные условием домашнего задания
function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}
function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    });
}

