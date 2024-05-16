function fibo (){
    let x=0;
    let y=1;
    fibo=0;
    for(let i=1;i<=100;i++){
fibo=x+y;
console.log(fibo);
x=y;
y=fibo;
    }
}
fibo();





