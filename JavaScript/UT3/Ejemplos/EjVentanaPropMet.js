var btnPropiedades = window.document.getElementById("propiedades");
var btnMetodos = window.document.getElementById("metodos");

btnPropiedades.addEventListener("click", fPropiedades);
btnMetodos.addEventListener("click", fMetodos);

var propiedades = "";
var metodos = [];

function fPropiedades(){
    propiedades=Object.getOwnPropertyNames(window);
    console.log(propiedades);
}

function fMetodos(){
    for(i in window){
        if(typeof window[i] == "function"){
            metodos.push(i);
        }
    }
    console.log(metodos);
}