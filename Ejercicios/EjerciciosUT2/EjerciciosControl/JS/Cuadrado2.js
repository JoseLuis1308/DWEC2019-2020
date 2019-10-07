var btnRellenar=document.getElementById("Rellenar");
var btnCalcular=document.getElementById("Calcular");
var tabla="<table border='1'>";
var contador=1;

const FILAS=5;

btnRellenar.addEventListener("click", pintar);
btnCalcular.addEventListener("click", sumar);

for(let i=1;i<=FILAS;i++){
    tabla+="<tr id='row"+i+"'>";
    for(let j=1;j<=FILAS;j++){
            tabla+="<td id='col"+j+"'></td>";
    }
    tabla+="</tr>";
}
    tabla+="</table>";
    document.getElementById("div").innerHTML=tabla;

var fila=document.getElementById("row1");
var celda=fila.getElementsByTagName("td");

function pintar(){
    //Primera fila 
    for(let i=0;i<FILAS;i++){
        celda[i].innerText=contador;
            contador++;
    }
    //primera columna
    for(let i=2;i<=FILAS;i++){
        fila=document.getElementById("row"+i);
        celda=fila.getElementsByTagName("td");
        celda[0].innerText=contador;
        contador++;
    }
    //ultima fila
    for(let i=1;i<FILAS;i++){
        fila=document.getElementById("row"+FILAS);
        celda=fila.getElementsByTagName("td");
        celda[i].innerText=contador;
        contador++;
    }
    //ultima columna
    for(let i=FILAS-1;i>1;i--){
        fila=document.getElementById("row"+i);
        celda=fila.getElementsByTagName("td");
        celda[FILAS-1].innerText=contador;
        contador++;
    }
}

function sumar(){
    var suma=0;
    
    fila=document.getElementById("row"+(FILAS-2));
    celda=fila.getElementsByTagName("td");

    for(let i=1;i<contador-1;i++){
        suma+=i;
    }
    //Lo pinta en la celda central si el numero de filas es 5
    celda[FILAS-3].innerText=suma;
}
