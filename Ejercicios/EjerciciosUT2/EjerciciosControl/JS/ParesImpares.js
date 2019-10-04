var cadImpar="<table border='1'>";
var cadPar="<table border='1'>";
var cadTodos="<table border='1'>";
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
                if(cont%2!=0){
                    cadImpar+="<td id='"+cont+"'>"+cont+"</td>";
                    cadPar+="<td id='"+cont+"'>...</td>";
                    cadTodos+="<td id='"+cont+"'>"+cont+"</td>";
                    cont++;
                }else if(cont%2==0){
                     cadImpar+="<td id='"+cont+"'>...</td>";
                    cadPar+="<td id='"+cont+"'>"+cont+"</td>";
                    cadTodos+="<td id='"+cont+"'>"+cont+"</td>";
                    cont++;
                }
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
}