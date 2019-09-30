var contador=1;
var num=1;
var botonSuma=document.getElementById("suma");
var celda;
botonSuma.addEventListener("click", suma);

function suma(){
    for(let i=1;i<=8;i++){
        for(let j=1;j<=8;j++){
            if(i>=1 || i<=2 )
            {
                document.getElementById(num).nodeValue=num
                num++
            }
        }
}
}

