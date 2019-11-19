var parrafo=document.getElementById("parrafo").innerText;
var btnMostrar=document.getElementById("mostrar");

btnMostrar.addEventListener("click", fmostrar);

function fmostrar(){
    var arrFrases=parrafo.split(",");

    for(let i=0;i<arrFrases.length;i++){
        console.log(arrFrases[i]);
    }
}