var arrPalabras= ["FREDDY KRUGGER", "HANNIBAL LECTER", "DRACULA", "NOSFERATU", "XENOMORFO",
 "CHUCKY", "JACK", "MICHAEL MYERS", "PENNYWISE", "PINHEAD", "JASON", "JIGSAW", "LEATHERFACE", "DORIAN GRAY", "PAZUZU"];
var arrLetras=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var boolJugar=true;//sierve para que la opcion de jugar partida solo se mueste una vez y para controlar el volver a jugar.
var palabra="";
var palEscondida="";
var btnJugar=document.getElementById("jugar");
var contError=0; 
var numAciertos=0;
var ahorcado="<div id=\"paloSup\"></div><div id=\"cuerda\"></div><div id=\"paloDer\"></div><div id=\"paloInf\"></div>";//Sirve para concatenar el muñeco
btnJugar.addEventListener("click", function (e){fJuego()});//utilizo una función oculta para llamar a la funcion arrow, porque no se pueden utilizar funciones arrow en addEventListener

 /*
 *fJuego
 *
 * Hace que se generen los datos y campos del html necesarios para que empiece el juego.
 * Se genera la palabra, y la palabra censurada, además de los botones de las letras. 
 * 
 */
var fJuego= () => 
    {
    if(boolJugar){
        let pos=Math.round(Math.random()*(arrPalabras.length-1));//genera un numero al azar de 0 a la longitud del array -1
        palabra= arrPalabras[pos];// selecciona la palabra gracias al numero elegido
        
        for(let i=0;i<palabra.length;i++){ //genera una cadena con una cantidad de guiones igual a las letras de la palabra
            if(palabra[i]==" "){
                palEscondida+=" ";
                numAciertos++;
            }else{
                palEscondida+="-";
            }   
        }
    
        document.getElementById("palabra").innerText=palEscondida;//introduce la cadena en el html  
        let botones="";
    
        for(let i=0;i<arrLetras.length;i++ ){ //genera una cadena con los botones de las letras
            if(i==10 || i==20){
                botones+="<br>";
            }
            //genera un botón de una letra con el evento de letra asociado.
            botones+="<button id="+arrLetras[i]+" onclick='fletra(\""+arrLetras[i]+"\")'>"+arrLetras[i]+"</button>"          
        }
        document.getElementById("letras").innerHTML=botones; //introduce las letras en el html       
        boolJugar=false//impide que se vuelvan a realizar estos pasos mientras no se cambie el boolean.
     }
 }

/**
 * 
 * @param  letra Es el id de la letra que se ha clicado, que es la letra en cuestión.
 * 
 * Busca en la palabra si existe la letra que ha pulsado, si es así se revela en la palabra censurada,
 * en caso contrario muestra una parte del ahorcado.
 * Si completa la palabra se muestra un mensaje para indicar que ha ganado y se le da la opcion de volver a jugar.
 */
 var fletra = (letra) =>{
     let acierto=false;
     let palEscIntr="";//palabra intermedia que se genera en funcion de la letra que introduzca

    document.getElementById(letra).disabled=true;//desactiva el botón

    for(let i=0;i<palabra.length;i++){//si la letra está en la palabra, se escribe la letra, si no se escribe lo que hubiese antes en la palabra escondida.
        if(palabra[i]==letra){
            palEscIntr+=letra;
            numAciertos++;
            acierto=true;
        }else{
            palEscIntr+=palEscondida[i];
        }
    }
    palEscondida=palEscIntr;//esto permite que las letras que haya acertado se mantengan;
    document.getElementById("palabra").innerText=palEscondida;

    if(!acierto){
        fallo();//Si no ha encontrado la letra elegida en la palabra se llama a la funcion fallo
    }else if(numAciertos==palabra.length){//si ha toda la palabra se le indica al jugador y se le permite volver a jugar.
        palEscIntr="Felicidades, has ganado, la palabra era: "+palabra;
        document.getElementById("palabra").innerHTML=palEscIntr;
        ahorcado="<button id=\"repetir\" onclick='fRepetir()'>Volver a jugar</button>";
         document.getElementById("letras").innerHTML=ahorcado; 
    }else{
        acierto=false;// en caso d que haya acertado, se reinicia el booleano a falso.
    }
 }

 /**
  * fallo
  * Aumenta el contador de fallos y muestra la parte del cuerpo en funcion del contador de fallos 
  * mientras el contador de fallos sea menor que 6.
  * Si llega a 6 fallos se considera que ha perdido y termina el juego.
  * Se muestra que palabra era la correcta y se da la opcion de volver a jugar, que llama a la funcion repetir()
  */
 var fallo = () =>
 {
    contError++;
     if(contError<6){ 
        switch(contError){
            case 1:
                ahorcado+="<div id=\"cabeza\"></div>";
                document.getElementById("muñeco").innerHTML=ahorcado;
                break;
            case 2:
                ahorcado+="<div id=\"cuerpo\"></div>";
                document.getElementById("muñeco").innerHTML=ahorcado;
                break;
            case 3:
                ahorcado+="<div id=\"brazoIz\"></div>";
                document.getElementById("muñeco").innerHTML=ahorcado;
                break;
            case 4:
                ahorcado+="<div id=\"brazoDer\"></div>";
                document.getElementById("muñeco").innerHTML=ahorcado;
                break;
            case 5:
                ahorcado+="<div id=\"piernaIz\"></div>";
                document.getElementById("muñeco").innerHTML=ahorcado;
                break;
        }
     }else{
        ahorcado+="<div id=\"piernaDer\"></div>";
        document.getElementById("muñeco").innerHTML=ahorcado;
         ahorcado="Has perdido, la respuesta era "+palabra+"<br> <button id=\"repetir\" onclick='fRepetir()'>Volver a jugar</button>";
         document.getElementById("letras").innerHTML=ahorcado; 
     }
 }

 /**
  * fRepetir
  * Resetea todos los valores necesarios para volver a jugar de 0.
  * Cambia boolJugar a true, eleimina el dibujo del ahorcado, pone los contadores de fallos y aciertos a 0
  * y borra la palabra escondida.Por ultimo llama a la funcion juego para que se vuelvan a ejecutar sus funciones.
  */
 var fRepetir=()=>{
     boolJugar=true;
     ahorcado="<div id=\"paloSup\"></div><div id=\"cuerda\"></div><div id=\"paloDer\"></div><div id=\"paloInf\"></div>";
     document.getElementById("muñeco").innerHTML=ahorcado;
     contError=0;
     numAciertos=0;
     palEscondida="";
     fJuego();   
 }