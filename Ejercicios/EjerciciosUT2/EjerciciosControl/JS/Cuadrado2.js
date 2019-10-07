var btnRellenar=document.getElementById("Rellenar");
var btnCalcular=document.getElementById("Calcular");
var tabla="<table border='1'>";

const FILAS=5;
btnRellenar.addEventListener("click", pintar);

for(let i=1;i<=FILAS;i++){
    tabla+="<tr id='row"+i+"'>";
    for(let j=1;j<=FILAS;j++){
            tabla+="<td id='col"+j+"'></td>";
    }
    tabla+="</tr>";
}
    tabla+="</table>";
    document.getElementById("div").innerHTML=tabla;


function pintar(){
    var cont=1;
    if( document.getElementById("row1")){
        for(let i=1;i<=FILAS;i++){
            document.getElementById("col"+i).innerHTML=cont
            cont++
         } 
    }

    
        /*for(let i=2;i<=FILAS;i++){
            if(document.getElementById("row"+i)){
                document.getElementById("col1").innerHTML=cont
            };
            cont++
        }*/
}