function makeCounter(count){

    return function(){ 
        return alert(++count)
    }
}
counter = makeCounter(0);
counter()
counter()
counter()

