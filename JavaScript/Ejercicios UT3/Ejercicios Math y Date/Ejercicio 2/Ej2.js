var btnMostrar=document.getElementById("mostrar");
btnMostrar.addEventListener("click", fmostrar);
var fechaActual=new Date();
var fechaNavidad= new Date(fechaActual.getFullYear(), 11,25);

function fmostrar(){
    var totalDias=fechaNavidad-fechaActual;

    totalDias=Math.round(totalDias/(1000*60*60*24));
    
    console.log(totalDias);
}