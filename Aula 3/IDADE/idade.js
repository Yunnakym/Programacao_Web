
function calcular(){
    let idade = Number(document.getElementById("idade").value);

    if(idade >= 18){
        resultado.innerHTML = "Idade maior que 18, acesso liberado! "
    }
  
    else{
        resultado.innerHTML = "Aesso Negado!"
    }
}