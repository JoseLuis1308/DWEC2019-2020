var btnGenerar=document.getElementById("generar");
btnGenerar.addEventListener("click", fgenerar);
var div=document.getElementById("numeros");

function fgenerar(){
    var arrNum=[];
    var añadir=true;
    var cadenaNum="";
    for(i=0;i<=6;i++){
        añadir=true;
        let num=Math.round(Math.random()*50+1);
        if(i>0){
            for(j=0;j<=i;j++){
                if(arrNum[j]==num){ //Si encuentra un numero igual en el array no se puede añadir.
                    añadir=false;
                    i=i-1;
                }
            }
            if(añadir){
                arrNum[i]=num;
                cadenaNum+=num+" ";
            }
        }else{
            arrNum[i]=num;
            cadenaNum+=num+" ";
        }
    }
    var reintegro=Math.round(Math.random()*9+1)
    cadenaNum+="Reintegro "+reintegro;
    div.innerText=cadenaNum;
}