
var cadena="";
var respuesta=confirm("Quieres mostrar las tablas de multiplicar?");

if(respuesta){
    for(let i=1;i<=10;i++){
        for(let j=1;j<=10;j++){
            cadena+=i+" * "+j+" = "+(i*j)+"<br/>";
            
        }
    }
    document.getElementById("tablas").innerHTML=cadena;
}