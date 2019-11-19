var btnCalcular=document.getElementById("calcular");

btnCalcular.addEventListener("click", fcalcular );

function fcalcular(){
    var formula=document.getElementById("formula").value;
    var parentAbierto=false;
    var parentCerrado=false;
    var error=false;
    var NumFuera="";
    var operandoFuera="";
    var NumDentro1="";
    var NumDentro2="";
    var operandoDentro="";
    var contOperandos=0;
    var oper=0;

    for(let i=0;i<formula.length;i++){
        if(formula[i]=="("){
            parentAbierto=true;
            for(let j=i+1;j<formula.length;j++){
                if(formula[j]==")"){
                    i=j;
                    parentCerrado=true;
                    j=formula.length;
                    
                }else if(formula[j]>=0 && formula[j]<=9){
                    NumDentro1+=formula[j];
                }else if(formula[j]=="+" ||formula[j]=="-" ||formula[j]=="*" ||formula[j]=="/"){
                    operandoDentro=formula[j];
                    contOperandos++;
                    for(let k=j+1;k<formula.length;k++){
                        if(formula[k]>=0 && formula[k]<=9){
                            NumDentro2+=formula[k];
                        }else{
                            j=k-1;
                            k=formula.length;
                        } 
                    }
                }
            } 
        }else if(formula[i]>=0 && formula[i]<=9){
            NumFuera+=formula[i];
        }else if(formula[i]=="+" ||formula[i]=="-" ||formula[i]=="*" ||formula[i]=="/"){
           operandoFuera=formula[i];
           contOperandos++;
        }else{
            error=true
        }
    }

    if(parentCerrado && parentAbierto && !error && contOperandos==2){
        NumDentro1=parseInt(NumDentro1);
        NumDentro2=parseInt(NumDentro2);
        NumFuera=parseInt(NumFuera);
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