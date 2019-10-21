//70 lineas
var contador=1;
var num=1;
var botonTabla=document.getElementById("btnTablero");
botonTabla.addEventListener("click", pintar);
var botonRellenar=document.getElementById("rellenar")
botonRellenar.addEventListener("click", rellenar);
var botonSumar=document.getElementById("sumar");
botonSumar.addEventListener("click", suma);
var cadena="";
var contador=1;
var pintar=true;

function pintar(){
    if(pintar){
        cadena+="<table border='1'>"
    for(let i=1;i<=8;i++){
        cadena+="<tr>"
        for(let j=1;j<=8;j++){
            if(i==1 || i==7  )
            {
                if(j%2==0){
                    //cadena+="<td>"+contador+"</td>";
                    cadena+="<td id='"+contador+"'></td>";
                    contador++;
                }else{
                cadena+="<td> </td>";
                }
            }else if(i==2 || i==8  )
            {
                if(j%2!=0){
                // cadena+="<td>"+contador+"</td>";
                cadena+="<td id='"+contador+"'></td>";
                    contador++;
                }else{
                cadena+="<td> </td>";
                }
            }else{
                cadena+="<td> </td>";
            }
        }
        cadena+="</tr>"
    }
    cadena+="</table>"

    document.getElementById("div").innerHTML=cadena;
    pintar=false;

    rellenar();

    suma();
    }
    
    
}
 
function rellenar(){
    for(let i=1;i<contador;i++){
        document.getElementById(i).innerHTML=i;
    }
    
}

function suma(){
    var resultado=0;
    for(let i=1;i<contador;i++){
        resultado=resultado+i;
    }
    console.log(resultado);   
}