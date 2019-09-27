var numIntr;
var mensaje="Has introducido un error en los numeros ";
var numCuenta=0;
var correctos=0;
var numero=0;
var media;
var error=false;


var botonMedia = document.getElementById("botonMedia");
botonMedia.addEventListener( "click", fCalcularMedia);

function fCalcularMedia(){
    /*for(var i=1;i<=10;i++){
        numIntr=prompt("Escribe un número");
        
        if(isNaN(numIntr) || numIntr=="" || parseFloat(numIntr)>99){
            mensaje=mensaje+i+" has introducido: \""+numIntr+"\", ";
            error=true;
        }else{
            numCuenta=numCuenta+parseFloat(numIntr);
            correctos++
        }
    }*/

    numIntr=prompt("Esribe numeros separados por espacios");

    for(var i=0;i<numIntr.length;i++){
        if(numIntr[1]!=""){
            if(isNaN(numIntr[i]))
            {
                mensaje=mensaje+i+" has introducido: \""+numIntr[i]+"\", ";
            }else if(numIntr[i]==" "){
                numCuenta=numCuenta+parseInt(numero);
                numero=""
                correctos++;
            }else{
                numero=numero+numIntr[i]
            }
        }
    }
    media=numCuenta/correctos;
    alert("La media de los numeros introducidos es "+media+"\n"+mensaje);
    }


