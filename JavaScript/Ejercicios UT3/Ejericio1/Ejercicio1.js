var input=window.document.getElementById("ip");
var btn=document.getElementById("comprobar");
btn.addEventListener("click", comprobar)

var txtError="";

function comprobar(){
    var error=0
    var ip=input.value;
   let cont=0;
   let numeros="";

    for(let i=0;i<ip.length;i++){
        if(ip[i]=="."){
            cont++;
        }
    }
    if(cont<3){
        error=1;
    }else if(cont>3){
        error=2;
    }else{
       numeros=ip.split(".");

       for(let i=0;i<numeros.length;i++){
           if(parseInt(numeros[i])>255){
               error=3;
               i=numeros.length-1;
           }else if(parseInt(numeros[i])<0){
               error=4;
               i=numeros.length-1;
           }
       }
    }

    switch(error){
        case 0:
            txtError="La ip introducida es válida "+ip;
            break;
        case 1:
            txtError="Has introducido menos de 4 números de ip "+ip;
            break;
        case 2:
            txtError="Has introducido mas de 4 números de ip "+ip;
            break;
        case 3:
            txtError="Has introducido un numero con un valor mayor a 255 "+ip;
            break;
        case 4:
            txtError="Has introducido un número negativo "+ip;
            break;
}
    console.log(txtError);
}