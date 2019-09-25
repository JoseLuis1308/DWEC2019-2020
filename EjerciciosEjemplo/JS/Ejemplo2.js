var nota=parseInt(prompt("Introduce la nota"))

switch(nota){
    case (nota>=0 && nota<3): 
        console.log("Muy deficiente");
        break;
    case (nota>=3 && nota<5): 
                                console.log("Insuficiente");
                                break;
    case (nota>=5 && nota<6):
                                console.log("Bien");
                                break;
    case (nota>=7 && nota<9): console.log("Notable");
                                break;  
    case 10: console.log("Notable");
                                break;
}
