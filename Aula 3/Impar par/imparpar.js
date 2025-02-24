
function verificar(){
    let numero = Number(document.getElementById("numero").value);

    if(numero % 2 === 0){
        resultado.innerHTML = "Par! "
    }
  
    else{
        resultado.innerHTML = "Impar!"
    }
}