var btnCalcular=document.getElementById("calcular");
btnCalcular.addEventListener("click", fcalcular);

function fcalcular(){
    var numeros=document.getElementById("numeros").value;
    var arrNumeros=[];
    var suma=0;
    var media="";
    var moda=[];
    var cadModa="Moda: ";
    var repetido=1;

    for(let i=0;i<numeros;i++){ //Genera el array de numeros
        arrNumeros[i]=Math.round(Math.random()*50);
    }
    var resultado="";

    for(let i=0;i<numeros;i++){//calcula la suma para la media
        suma+=arrNumeros[i];
    }
    media=suma/arrNumeros.length;//calcula la media

    for(let i=0;i<numeros;i++){//calcular la moda
        
            var calcRepet= repeticiones(arrNumeros[i], arrNumeros);

            if(repetido==1 && calcRepet>repetido){
                repetido=calcRepet;
                moda.push(arrNumeros[i]);//añado el número repetido a un array para mostrartlo al final
            }

            if(repetido>1){
                if(calcRepet>repetido){
                    repetido=calcRepet;
                    moda=(arrNumeros[i]);
                }else if(calcRepet==repetido){
                    moda.push(arrNumeros[i]);
                }
            }

        }

        if(moda.length==0){
            cadModa="No hay ningun número repetido";
        }else{
            for(let i=0;i<moda.length;i++){
                var boolmoda=true;
                for(let j=0;j<moda.length;j++){
                    if(j>i && moda[j]==moda[i]){
                        boolmoda=false;
                    }
                }
                if(boolmoda){
                    cadModa+=moda[i]+" ";
                }
            }
        }
   

    resultado+="Máximo: "+Math.max(...arrNumeros)+"\n Mínimo: "+Math.min(...arrNumeros)+"\n"+"Media: "+media+"\n"+cadModa;
    console.log(resultado);
    resultado+="";


function repeticiones(num, array){//Calcula el numero de repeticiones del numero que le pases en el array que le metas
    var repetido=0;
    for(let i=0; i<array.length;i++){
        if(array[i]==num){
            repetido++;
        }
    }
    return repetido;
}
}