// работает неправильно
function applyAll(){
    var args = [].slice.call(arguments);
    args.splice(0, 1);
    this.sum = function (){
        sumArr = 0;
        for (var i = 0; i < args.length; i++){
            sumArr += args[i];
        }
        console.log('Сумма аргументов:' + sumArr)
    }
    this.mul = function (){
        mulArr = 1;
        for (var i = 0; i < args.length; i++){
            mulArr *= args[i];
        }
        console.log('Произведение аргументов: ' + mulArr)
    }
}

var summ = new applyAll(6, 7, 2, 3, 4, 5);
summ.sum()

var mull = new applyAll(6, 7, 2, 3, 4, 5);
mull.mul()



