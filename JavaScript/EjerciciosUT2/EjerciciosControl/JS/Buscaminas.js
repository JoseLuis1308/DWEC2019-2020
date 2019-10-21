var tabla="<table border='1'>";
const FILAS=8;
const COLS=8;

for(let i=1;i<=8;i++){
    tabla+="<tr>";
    for(let j=1;j<=8;j++){
            tabla+="<td><button>O</button></td>";
    }
    tabla+="</tr>";
}
tabla+="</table>";

document.getElementById("div").innerHTML=tabla
col[random]