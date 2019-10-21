var datos=window.location.search;
var input=datos.split("?");
for(let i=1;i<input.length;i++){
    console.log(input[i]);
}
var input=document.getElementsByTagName("input");
for(let i=1;i<input.length;i++){
    input[i].value=datos[i];
}