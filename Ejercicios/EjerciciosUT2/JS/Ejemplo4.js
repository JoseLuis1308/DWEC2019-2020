var numero=0;
do{
    var peticion=prompt("Escribe un numero");
    if(peticion!=null && !isNaN(peticion) && peticion!="")
    {
        numero=numero+parseInt(peticion);
    }  else{
        alert(peticion+" No es un numero");
    }
}while(peticion!=null)
alert("la suma de los numeros es: "+numero)