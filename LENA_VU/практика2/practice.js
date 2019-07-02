var res=0;
res = prompt("input any number");
check(res);
function check(res){
    if (res%2){
        console.log("odd");
    }
    else {console.log("even");}
}
