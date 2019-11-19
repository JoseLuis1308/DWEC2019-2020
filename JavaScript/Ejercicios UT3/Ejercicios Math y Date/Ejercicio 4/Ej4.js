
var intervalo=window.setInterval(freloj, 1000);

function freloj(){
    var fecha= new Date();
    var hora=fecha.toLocaleTimeString();
    document.getElementById("reloj").innerText=hora;
}