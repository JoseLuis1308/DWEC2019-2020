var inputs="";
for(let i=0;i<=10;i++){
    inputs+="texto <input type='text' id='"+i+"' ><br>";
}
document.getElementById("inputs").innerHTML=inputs;

var btn=document.getElementById("btn");

btn.addEventListener("click", factivar);

function factivar(){
    var cosas=document.getElementsByTagName("input");
    console.log("factivar");
    fmostrar(cosas);
}

function fmostrar(...cosas){
    for(let i=0;i<cosas.length;i++){
        console.log(cosas[i].value);
    }
}