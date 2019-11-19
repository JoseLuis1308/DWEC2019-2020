var btnCalcular=document.getElementById("calcular");
btnCalcular.addEventListener("click", fcalcular);
var error="error"

function fcalcular(){
    var area= document.getElementById("area");
    var base=document.getElementById("base").value;
    var altura=document.getElementById("altura").value;

    if(isNaN(base) || isNaN(altura)){
        area.innerText=error;
    }else{
        var resultado=(base*altura)/2;
        resultado=resultado.toFixed(2);
        area.innerText=resultado;
    }
}