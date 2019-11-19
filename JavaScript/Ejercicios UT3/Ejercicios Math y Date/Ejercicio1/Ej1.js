var fecha = new Date(2014,0,1); //0 es enero.
var contEneros=0;
var cadena="años en los que el lunes cae en domingo. \n Son: ";
var fechaIni=2014;
var fechaFin=2050;
var btnMostrar=document.getElementById("mostrar");
btnMostrar.addEventListener("click", fcalcular);

function fcalcular(){
    for(let i = fechaIni;i<=fechaFin;i++){
        fecha=new Date(i,0,1);
        if(fecha.getDay()==0){// getDay de vuelve valores de 0 a 6, donde 0 es domingo y 6 es sábado.
            contEneros++
            cadena+=i+" ";
        }
    }
    
    console.log ("Hay "+contEneros+" "+cadena);
}
