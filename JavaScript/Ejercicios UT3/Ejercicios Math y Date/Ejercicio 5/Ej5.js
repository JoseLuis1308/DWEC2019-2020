var selDia=document.getElementById("dia");
var selMes=document.getElementById("mes");
var selAño=document.getElementById("año");

var arrMeses= ["enero", "febrero", "marzo", "abril", "mayo", "junio",
"julio", "agosto", "septiembre", "ocutbre", "noviembre", "diciembre"];



var btnGenerar=document.getElementById("generar")
btnGenerar.addEventListener("click", fgenerar);

var options="";
var optionsDia="";
var año=0;

selMes.addEventListener("change", fDia);
selAño.addEventListener("change", fAño)

function fDia(){//Cambia los dias en funcion del mes selecionado.
    var mes=selMes.value;

    if(mes==0 || mes==2 || mes==4 || mes==6 || mes==7 || mes==9 || mes==11){
        for(let i=1;i<=31;i++){
            optionsDia+="<option value="+i+">"+i+"</option>";
        }
    }else if(mes==3 || mes==5 || mes==8 || mes==10){
        for(let i=1;i<=30;i++){
            optionsDia+="<option value="+i+">"+i+"</option>";
        }
    }else if (mes==1 && (año % 4 == 0 && año % 100 != 0 ) || (año % 400 == 0)){
        for(let i=1;i<=29;i++){
            optionsDia+="<option value="+i+">"+i+"</option>";
        }
    }else if (mes==1){
        for(let i=1;i<=28;i++){
            optionsDia+="<option value="+i+">"+i+"</option>";
        }
    }
    selDia.innerHTML=optionsDia;
    optionsDia="";
}

//Cambia los dias en funcion del año seleccionado Importante para febrero
function fAño(){
    año=selAño.value;
    fDia();
}


//La primera vez que se entra a la pagina se muestra 1 de enero del primer año (1995)
var options="";
for(let i=1;i<=31;i++){
    options+="<option value="+i+">"+i+"</option>";
}
selDia.innerHTML=options;


var options="";
for(let i=0;i<=11;i++){
    options+="<option value="+i+">"+arrMeses[i]+"</option>";
}
selMes.innerHTML=options;

var options="";
for(let i=1995;i<=2019;i++){
    options+="<option value="+i+">"+i+"</option>";
}
selAño.innerHTML=options;

año=selAño.value;//guarda el año de inicio para poder utilizarlo desde el principio para poner los dias de los meses.

//Genera la fecha.
function fgenerar(){
    var fecha=new Date(selAño.value, selMes.value, selDia.value);
    var mostrar=fecha.toLocaleDateString();
    document.getElementById("fecha").innerText=mostrar;
}