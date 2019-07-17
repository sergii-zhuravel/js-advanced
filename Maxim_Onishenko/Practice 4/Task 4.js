function protChain(thing){
    let res = '';
    while (thing.__proto__ !== null){
        res += thing.__proto__.toString()
        thing = thing.__proto__;
        

    }
    return res
}

protChain([])