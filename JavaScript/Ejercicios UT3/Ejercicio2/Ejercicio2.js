var btnComprobar=document.getElementById("comprobar");
btnComprobar.addEventListener("click", fcomprobar);

function fcomprobar(){
    var texto=document.getElementById("texto").value;
    var contCons=0;
    var arrVocales=["a","e", "i", "o", "u"];
    var arrCons=["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "W", "x", "y", "z"];
    texto=texto.toLowerCase();
    var contVoc=0;
    var resultado="";
    for(let i=0; i<texto.length;i++){
        for(let j=0;j<arrVocales.length;j++){
            if(texto[i]==arrVocales[j]){
                contVoc++
            }
        }

        for(let j=0;j<arrCons.length;j++){
            if(texto[i]==arrCons[j]){
                contCons++
            }
        }
        
    }

    resultado=texto+" tinene \n vocales: "+contVoc+"\n consonantes: "+contCons;
    console.log(resultado);
}
