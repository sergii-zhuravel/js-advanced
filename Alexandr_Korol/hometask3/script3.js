//CALL
function revers(){
    var i;
    for(i=0; i<10; i++)
    this.mass[i] = this.entermassive[9-i];
};
var obj = {
    entermassive: [0,1,2,3,4,5,6,7,8,9],
    mass: []
};
revers.call(obj);
console.log(obj.mass);
//APPLY
function printnums(){
    console.log(this.name + " " +this.massiv);
};
var object = {
    name: 'Massive',
    massiv: [1,2,3,4,5]
};
var mas = ['name', 'massiv'];
printnums.apply(object, mas);
//BIND
function summator(){
    var result = this.firstnum + this.secondnum;
    console.log('firstnum + secondnum is: ' + result);
}
var object = {
      firstnum: 12,
      secondnum: 13
  };
var func = summator.bind(object);
func();