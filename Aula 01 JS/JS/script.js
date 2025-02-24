document.getElementById("demo").innerHTML = "Estuda que vc é pobre!";

function aumentar(){
    document.getElementById("demo").style.fontSize = "35px";
}
function diminuir(){
    document.getElementById("demo").style.fontSize = "15px";
}


function desligar(){
    document.getElementById("Lâmpada").src = "img/apagada.png";
}

function ligar(){
    document.getElementById("Lâmpada").src="img/ligada.png";
}

function Sol(){
    document.getElementById("Tempo").src = "IMG/sol.webp";
}

function chuva(){
    document.getElementById("Tempo").src="IMG/chuva.jpg";
}