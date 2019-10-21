var numIntr;
var mensaje="Has introducido un error en los numeros ";
var numCuenta="";
var correctos=0;
var numero=0;
var media="";
var error=false;
var res="";


var botonMedia = document.getElementById("botonMedia");
botonMedia.addEventListener( "click", fCalcularMedia);

function fCalcularMedia(){
    for(var i=1;i<=10;i++){
        numIntr=prompt("Escribe un número");
        
        if(isNaN(numIntr) || numIntr=="" || parseFloat(numIntr)>99){
            mensaje=mensaje+i+" has introducido: \""+numIntr+"\", ";
            error=true;
        }else{
            numCuenta=numCuenta+parseFloat(numIntr);
            correctos++
        }
        media=numCuenta/correctos;
        
    }
}

    //numIntr=prompt("Esribe numeros separados por espacios");

   /* for(var i=0;i<numIntr.length;i++){
        if(numIntr[1]!=""){
            if(isNaN(numIntr[i]))
            {
                mensaje=mensaje+i+" has introducido: \""+numIntr[i]+"\", ";
                numero=0;;
            }else if(numIntr[i]==" "){
                numCuenta=numCuenta+parseInt(numero);
                numero=0;
                correctos++;
            }else{
                numero=numero+numIntr[i]
            }
        }
    }
    media=numCuenta/correctos;
    alert("La media de los numeros introducidos es "+media+"\n"+mensaje);
    }*/

    //Con eval, solo para ver como se usa, no utilizar nunca
    /*function fCalcularMedia(){
        for(var i=1;i<=10;i++){
            numIntr=prompt("Escribe un número");
            
            if(isNaN(numIntr) || numIntr=="" || parseFloat(numIntr)>99){
                mensaje=mensaje+i+" has introducido: \""+numIntr+"\", ";
                error=true;
            }else{
                if(i!=10)
                {
                    numCuenta+=numIntr+"+";
                    correctos++
                }else{
                    numCuenta+=numIntr;
                    correctos++
                }
            }
            media=numCuenta/correctos;
        }
        if(!error){
             res= eval(numCuenta);
            media=eval(res/correctos);
            alert(media);
        }
    }*/ 