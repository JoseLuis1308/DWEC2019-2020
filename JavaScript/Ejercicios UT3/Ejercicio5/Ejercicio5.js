var texto=document.getElementById("texto").innerText;
var btnOracion=document.getElementById("oracion");
var btnMin=document.getElementById("min");
var btnMay=document.getElementById("may");
var btnPrimMay=document.getElementById("primMay");
var btnAlterno=document.getElementById("alterno");

btnOracion.addEventListener("click", foracion);
btnMin.addEventListener("click", fminusculas);
btnMay.addEventListener("click", fmayusculas);
btnPrimMay.addEventListener("click", fPrimMayus);
btnAlterno.addEventListener("click", fAlternos);

function foracion(){
    texto=texto.toLowerCase();
    var texto2="";
    for(let i=0;i<texto.length;i++){
        if(i==0){
            texto2=texto[i].toUpperCase();
        }else{
            texto2+=texto[i];
        }
    }
    document.getElementById("texto").innerText=texto2;
    //console.log(texto2);
}

function fminusculas(){
    texto=texto.toLowerCase();
    //console.log(texto);
    document.getElementById("texto").innerText=texto;
}

function fmayusculas(){
    texto=texto.toUpperCase();
    //console.log(texto);
    document.getElementById("texto").innerText=texto;
}

function fPrimMayus(){
    texto=texto.toLowerCase();
    var texto2="";
    for(let i=0;i<texto.length;i++){
        if(i==0){
            texto2=texto[i].toUpperCase();
        }else if(texto[i-1]==" "){
            texto2+=texto[i].toUpperCase();
        }else{
            texto2+=texto[i];
        }
    }
    document.getElementById("texto").innerText=texto2;
    //console.log(texto2);
}

function fAlternos(){
    var arrTexto=texto.split(" ");
    var texto2="";
    for(let i=0;i<arrTexto.length;i++){
        if(i==0){
            for(let j=0;j<arrTexto[i].length;j++){
                if(j%2==0){
                    texto2+=arrTexto[i][j].toUpperCase();
                }else{
                    texto2+=arrTexto[i][j].toLowerCase();
                }
            }
        }else{
            if(texto2[texto2.length-2]==texto2[texto2.length-2].toUpperCase()){
                for(let j=0;j<arrTexto[i].length;j++){
                    if(j%2!=0){
                        texto2+=arrTexto[i][j].toUpperCase();
                    }else{
                        texto2+=arrTexto[i][j].toLowerCase();
                    }
                }
            }else{
                for(let j=0;j<arrTexto[i].length;j++){
                    if(j%2==0){
                        texto2+=arrTexto[i][j].toUpperCase();
                    }else{
                        texto2+=arrTexto[i][j].toLowerCase();
                    }
                }
            }
        }
        texto2+=" ";
    }
    document.getElementById("texto").innerText=texto2;
}
