var cadImpar="<table border='1'>";
var cadPar="<table border='1'>";
var cadTodos="<table border='1'>";
var impar=document.getElementById("impar").innerHTML=cadImpar;
var par=document.getElementById("par").innerHTML=cadPar;
var todos=document.getElementById("todo").innerHTML=cadTodos;
var cont=1;
var botonGenerar=document.getElementById("tablas");
const CELDAS=10;
botonGenerar.addEventListener("click", genTablas);
var generar=false;

function genTablas(){
    if(!generar){
        for(let i=1;i<=CELDAS;i++){
            cadImpar+="<tr>";
            cadPar+="<tr>";
            cadTodos+="<tr>";
            for(let j=1;j<=CELDAS;j++){
                cadImpar+="<td id='impar"+cont+"'></td>";
                cadPar+="<td id='par"+cont+"'></td>";
                cadTodos+="<td id='todo"+cont+"'></td>";
                cont++; 
            }
            cadImpar+="</tr>";
            cadPar+="</tr>";
            cadTodos+="</tr>";
        }
            cadImpar+="</table>";
            cadPar+="</table>";
            cadTodos+="</table>";
    
            document.getElementById("impar").innerHTML=cadImpar;
            document.getElementById("par").innerHTML=cadPar;
            document.getElementById("todo").innerHTML=cadTodos;
    }
    generar=true;
    rellenar();
}

function rellenar(){
    for(let i=1;i<=100;i++){
        if(i%2 != 0){
            document.getElementById("impar"+i).innerHTML=i;
            document.getElementById("todo"+i).innerHTML=i;
        }else if(i%2 == 0 ){
            document.getElementById("par"+i).innerHTML=i;
            document.getElementById("todo"+i).innerHTML=i;
        }
    }
}