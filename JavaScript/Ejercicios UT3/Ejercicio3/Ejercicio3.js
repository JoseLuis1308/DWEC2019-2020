var btnComprobar=document.getElementById("comprobar");
var texto=document.getElementById("parrafo").innerText;

btnComprobar.addEventListener("click", fComprobar)
var arrLetras=["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p",
"q", "r", "s","t","u","v","w", "x", "y", "z", "á", "é", "í", "ó", "ú"];
function fComprobar(){
    texto=texto.toLowerCase();
    var letra=document.getElementById("letra").value;
    letra=letra.toLowerCase();
    var esLetra=false;
    var cont=0;

    if(letra.length==1){// si solo introduce una letra valida que sea una letra y no otro caractes
        for(let i=0;i<arrLetras.length;i++){
            if(letra==arrLetras[i]){
                esLetra=true;
            }
        }
        if(!esLetra){
                console.log("Se ha introducido una letra inválida"); 
        }
    }else{
        console.log("Se ha introducido mas de una letra");
    }

    if(esLetra){//si ha introducido una letra válida, busca por todo el texto la letra y cuenta cuantas veces aparece.
        for(let i=0;i<texto.length;i++){
            if(texto[i]==letra){
                cont++;
            }
        }
        console.log("Se han encontrado "+cont+" "+letra+" en el texto");
    }
}