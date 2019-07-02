var res=0;
res = prompt("input any number");
check(res);
function check(res){
    if (res%2==0){
        console.log("even");
    }
    else {console.log("odd");}
}
