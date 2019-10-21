var btnRellenar=document.getElementById("Rellenar");
var btnCalcular=document.getElementById("Calcular");
    var tabla="<table border='1'>";
    var contador=1;
    var contador2=1;
    var terminar=false;
    const FILAS=5;
    const COLS=8;
    if(FILAS>0 && COLS>0){
    var posSumFil=Math.round(FILAS/2);
    var posSumCol=Math.round(COLS/2)-1;

    btnRellenar.addEventListener("click", pintar);
    btnCalcular.addEventListener("click", sumar);

    for(let i=1;i<=FILAS;i++){
        tabla+="<tr id='row"+i+"'>";
        for(let j=1;j<=COLS;j++){
                tabla+="<td id='col"+j+"'></td>";
        }
        tabla+="</tr>";
    }
        tabla+="</table>";
        document.getElementById("div").innerHTML=tabla;

    var fila=document.getElementById("row1");
    var celda=fila.getElementsByTagName("td");

    function pintar(){
        if(!terminar){
                //Primera fila 
            for(let i=0;i<COLS;i++){
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
            for(let i=1;i<COLS;i++){
                fila=document.getElementById("row"+FILAS);
                celda=fila.getElementsByTagName("td");
                celda[i].innerText=contador;
                contador++;
            }
            //ultima columna
            for(let i=FILAS-1;i>1;i--){
                fila=document.getElementById("row"+i);
                celda=fila.getElementsByTagName("td");
                celda[COLS-1].innerText=contador;
                contador++;
            }

            for(let i=2;i<FILAS;i++){
                for(let j=1;j<COLS-1;j++){
                if(i!=posSumFil || j!=posSumCol){
                fila=document.getElementById("row"+i);
                celda=fila.getElementsByTagName("td");
                celda[j].innerText=contador2;
                contador2++;
                }
            }
        }
        terminar=true;
     }
    }

    function sumar(){
        var suma=0;
        
        fila=document.getElementById("row"+(posSumFil));
        celda=fila.getElementsByTagName("td");

        for(let i=1;i<contador-1;i++){
            suma+=i;
        }
        //Lo pinta en la celda central si el numero de filas es 5
        celda[posSumCol].innerText=suma;
    }

}else{
    alert("No puedes meter numeros negativos");
}
