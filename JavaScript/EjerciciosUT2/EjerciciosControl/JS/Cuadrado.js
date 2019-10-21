var btnRellenar=document.getElementById("Rellenar");
var btnCalcular=document.getElementById("Calcular");
const FILAS=3;
var cont=1;
var tabla="<table border='1'>";
var max=(FILAS*4)-4;
var cont2=max;

btnRellenar.addEventListener("click", pintar);
btnCalcular.addEventListener("click", sumar);

for(let i=1;i<=FILAS;i++){
    
    tabla+="<tr>";
    for(let j=1;j<=FILAS;j++){
        if(i==1){          
            tabla+="<td id='"+cont+"'></td>";
            cont++;
        }else if((i>1 || i<FILAS) && j==1){        
            tabla+="<td id='"+cont+"'></td>";
            cont++;
        }else if((i>1 || i<FILAS) && j==FILAS){        
            tabla+="<td id='"+cont2+"'></td>";
            cont2--;
        }else if(i==FILAS){
            tabla+="<td id='"+cont+"'></td>";
            cont++;
        }else{
            tabla+="<td></td>";
        }
    }
    tabla+="</tr>";
}
    tabla+="</table>";

    document.getElementById("div").innerHTML=tabla;

function pintar(){
    for(let i=1;i<=max;i++){
        document.getElementById(i).innerHTML=i;
    }
}

function sumar(){
    var suma=0;
    for(let i=1;i<max;i++){
        suma+=i;
    }
    console.log(suma);
}