var numDni=prompt("Escribe el numero de dni");
var resto;
var letras="TRWAGMYFPDXBNJZSQVHLCKE";
var letra;
if(numDni>=0 && numDni<=99999999){
    resto=parseInt(numDni)%23;
    letra=letras[resto];
    alert("La letra del dni "+numDni+" es "+letra);
}else{
    alert("Has introducido un dni incorrecto");
}