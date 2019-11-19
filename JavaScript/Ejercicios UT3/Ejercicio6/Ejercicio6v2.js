var btnCalcular=document.getElementById("calcular");

btnCalcular.addEventListener("click", fcalcular );

function fcalcular(){
    var formula=document.getElementById("formula").value;
    var parentAbierto=false;
    var posParAbierto=0; // la utilizaré para hacer un substring para obtener el substring del primer numero dentro del parentesis
    var parentCerrado=false;
    var posParCerrado=0; //la utilizaré para hacer un substring para obtener el substring del segundo numero dentro del parentesis
    var error=false;
    var operandoFuera="";
    var posOperDentro=0; //Lo utilizo para realizar los substring dentro del parentesis
    var operandoDentro="";
    var posOperFuera=0; //Lo utilizo para realizar los substring fuera del parentesis;
    var contParentesis=0;
    var contOperandosDentro=0;
    var contOperandosFuera=0;
    var NumFuera=0;
    var oper=0;

    for(let i=0;i<formula.length;i++){
        if(formula[i]=="("){//dentro del parentesis
            parentAbierto=true;
            posParAbierto=i;
            contParentesis++;
            for(let j=i+1;j<formula.length;j++){
                if(formula[j]==")"){// si encuentra elparentesis cerrado sale de este for
                    i=j;            //pone la posicion del for de la operación en la posicion en la que encuentra el parentesis cerrado
                    parentCerrado=true;
                    j=formula.length;
                    posParCerrado=j;
                    contParentesis++;
                }else if(formula[j]=="+" ||formula[j]=="-" ||formula[j]=="*" ||formula[j]=="/"){
                    operandoDentro=formula[j];
                    posOperDentro=j;
                    contOperandosDentro++;
                }else if(formula[j]=="("){
                    contParentesis++;
                }
            }
        }else if(formula[i]=="+" ||formula[i]=="-" ||formula[i]=="*" ||formula[i]=="/"){//Fuera del parentesis
            operandoFuera=formula[i];
            posOperFuera=i;
            contOperandosFuera++;    
        }else if(formula[i-1]==")" && (formula[i]>=0 && formula[i]<=9)){
            error=true;
        }else if(formula[i+1]=="(" && (formula[i]>=0 && formula[i]<=9)){
            error=true;
        }else if(formula[i]>=0 && formula[i]<=9){ 
        }else{
                error=true;
            }
    }

    if(parentCerrado && parentAbierto && !error && contParentesis==2 && contOperandosFuera==1 && contOperandosDentro==1){
        var NumDentro1=parseInt(formula.substring(posParAbierto+1, posOperDentro));
        var NumDentro2=parseInt(formula.substring(posOperDentro+1, posParCerrado));
       switch(operandoDentro){
            case "+":
                oper=NumDentro1+NumDentro2;
                break;
             case "-":
                oper=NumDentro1-NumDentro2;
                break;
            case "/":
               oper=NumDentro1/NumDentro2;
               break;
            case "*":
               oper=NumDentro1*NumDentro2;
               break;
       }
        if(isNaN(parseInt(formula[0]))){
            NumFuera=parseInt(formula.substring(posOperFuera));
            switch(operandoFuera){
                case "+":
                    oper=oper+NumFuera;
                    break;
                case "-":
                    oper=oper-NumFuera;
                    break;
                case "/":
                oper=oper/NumFuera;
                    break;
                case "*":
                    oper=oper*NumFuera;
                    break;  
       }
        }else{
            NumFuera=parseInt(formula.substring(0,posOperFuera));
            switch(operandoFuera){
                case "+":
                    oper=NumFuera+oper;
                    break;
                case "-":
                    oper=NumFuera-oper;
                    break;
                case "/":
                    oper=NumFuera/oper;
                    break;
                case "*":
                    oper=NumFuera*oper;
                    break;  
             }
   }
   console.log(oper);
    }else{
        console.log("error");
    }
}