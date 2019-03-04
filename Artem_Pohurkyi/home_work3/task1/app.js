function Pizza (topings, bortik, size) {
    this.topings = topings;
    this.bortik = bortik;
    this.size = size;
    this.makePizza = function(){
        if (this.bortik == true){
            console.log(this.size + ' pizza with bortik and with topings: ' + this.topings)
        }else{
            console.log(this.size + ' pizza without bortik and with topings: ' + this.topings)
        };
    };
    this.packPizza = function(){
        console.log('Pizza packed into ' + this.size + ' box')
    }
}

var myPizza = new Pizza(['cheese', ' sausage', ' sauce'], true, 'Big');
myPizza.makePizza()
myPizza.packPizza()

var myPizza2 = new Pizza(['cheese', ' bekon', ' tomatoes', ' spicy sauce'], false, 'Small')
myPizza2.makePizza()
myPizza2.packPizza()