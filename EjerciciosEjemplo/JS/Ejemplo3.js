var cadena="";
var parar=false;
do{
    var peticion=prompt("Escribe algo");
    if(peticion!=null)
    {
        cadena=cadena+"-"+peticion;
    }  
}while(peticion!=null)

console.log(cadena);
