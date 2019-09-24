
var botonFor = document.getElementById("botonFor");
var botonWhile = document.getElementById("botonWhile");
var botonDoWhile = document.getElementById("botonDoWhile");

//botonFor.addEventListener( "click", fBucleFor);
botonWhile.addEventListener( "click", fBucleWhile);
botonDoWhile.addEventListener( "click", fBucleDoWhile);

for(var num=1;num<=10;num++){
    console.log(num);
}
/*
function fBucleFor(){
    for(var num=1;num<=10;num++){
        console.log(num);
    }
}*/

function fBucleWhile(){
    var num =1;
    while(num<=10){
        console.log(num);
        num++;
    }
}

function fBucleDoWhile(){
    var num =1;
    do{
        console.log(num);
        num++;
    }while(num<=10)
}
