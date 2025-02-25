
function verificar(){
    let idade = Number(document.getElementById("idade").value);
    let imgVerifica = document.getElementById("imgVerifica");

    if(idade >= 18){
      // resultado.innerHTML = "Idade maior que 18, acesso liberado! "
       alert("Idade maior que 18, acesso liberado!")
        
        imgVerifica.src = "aprovado.png"
    }
  
    else{
        //resultado.innerHTML = "Acesso Negado!"
        alert("Acesso Negado!")

        imgVerifica.src = "negado.png"
    }
}