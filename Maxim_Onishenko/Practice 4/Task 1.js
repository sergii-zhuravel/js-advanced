function sumAll() {
    let totalSum=0;
    for (i = 0; i< arguments.length; i++){
        totalSum += arguments[i];
    }
    return totalSum
}

sumAll(3,4,3,5,3,1,44,3)


