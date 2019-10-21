var boton=window.document.getElementById("button");
var texto=window.document.getElementsByTagName("input");
var valor="?";
var history=window.history.state;
boton.addEventListener("click", mostrar);
var url=window.location;
function mostrar(){
    for(let i=0;i<texto.length;i++){
        valor+=texto[i].value+"?";
    }
        console.log(valor);
        console.log(history);
        console.log(url)
        var ventana=window.open("Ejemplo1-5.html"+valor);

}