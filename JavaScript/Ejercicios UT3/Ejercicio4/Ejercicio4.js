var btnSumar=document.getElementById("suma");
btnSumar.addEventListener("click", fSumar);
var arrLetras=["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p",
"q", "r", "s","t","u","v","w", "x", "y", "z"];

function fSumar(){
    var texto=document.getElementById("texto").value;
    var suma=0;
    var bool=false;
    var cont=0;
    var resultado="";
    texto=texto.toLowerCase();
    for(let i=0;i<texto.length;i++){
        for(let j=0;j<arrLetras.length;j++){
            if(texto[i]==arrLetras[j]){
                suma+=j+1;
                bool=true;
            }
        }
        if(!bool){
            cont++;
        }
        bool=false;
    }
    if(cont==0){
        resultado=suma;
    }else{
        resultado=suma+" se han introducido "+cont+" caracteres que no son letras";
    }
     console.log(resultado);
}