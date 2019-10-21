var botonMedia = document.getElementById("botonMedia");
botonMedia.addEventListener( "click", fCalcularMedia);

var num1=parseInt(prompt("escribe un numero"));
var num2=parseInt(prompt("escribe un numero"));
var num3=parseInt(prompt("escribe un numero"));
var num4=parseInt(prompt("escribe un numero"));
var num5=parseInt(prompt("escribe un numero"));
var num6=parseInt(prompt("escribe un numero"));
var num7=parseInt(prompt("escribe un numero"));
var num8=parseInt(prompt("escribe un numero"));
var num9=parseInt(prompt("escribe un numero"));
var num10=parseInt(prompt("escribe un numero"));


function fCalcularMedia(){

    var suma=num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;
    var media=suma/10;
    console.log(media);
}