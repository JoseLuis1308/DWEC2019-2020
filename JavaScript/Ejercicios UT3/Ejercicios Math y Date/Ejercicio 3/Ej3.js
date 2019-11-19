var btnMostrar=document.getElementById("mostrar");
btnMostrar.addEventListener("click", fmostrar);

var fecha= new Date();
var arrDias=["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
var arrMeses= ["enero", "febrero", "marzo", "abril", "mayo", "junio",
"julio", "agosto", "septiembre", "ocutbre", "noviembre", "diciembre"];

function fmostrar(){
    var mostrar=arrDias[fecha.getDay()]+" ";

    mostrar+=fecha.getDate()+" de "+arrMeses[fecha.getMonth()]+" del "+fecha.getFullYear()+". ";

    if(fecha.getHours()>12){
        mostrar+="Hora actual: "+(fecha.getHours() - 12)+" PM : "+fecha.getMinutes()+" : "+fecha.getSeconds();
    }else{
        mostrar+="Hora actual: "+fecha.getHours()+"AM : "+fecha.getMinutes()+" : "+fecha.getSeconds();
    }
    
    console.log(mostrar);
}
