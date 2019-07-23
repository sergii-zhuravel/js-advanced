function makeAdder(n){
    return function(arr){
        for(let i = 0; i < arr.length; i++)
        {
            arr[i] += n;
        }
        return arr;
    }
}

let myAdder5 = makeAdder(5);
let myAdder12 = makeAdder(12);

console.log(myAdder5([10, 15, 20]));
console.log(myAdder12([33, 45, 11]));