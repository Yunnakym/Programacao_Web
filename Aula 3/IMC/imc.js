function calcular(){
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    let imc = peso / (altura * altura);

    if(imc < 18.6){
        resultado.innerHTML = "Seu IMC é: "+imc.toFixed(2)+ " Você está abaixo do peso, se cuide!!"
    }
    else if(imc >= 18.6 && imc < 25){
         resultado.innerHTML = "Seu IMC é: "+imc.toFixed(2)+ " está no peso ideal"
    }
    else if(imc >= 25 && imc < 30){
         resultado.innerHTML = "Seu IMC é: "+imc.toFixed(2)+ " Está levemente acima do peso, se cuide!!"    
    }
    else if(imc >= 30 && imc < 35){
        resultado.innerHTML = "Seu IMC é: "+imc.toFixed(2)+ " Obesidade Grau 1º" 
    }
    else if(imc >= 35 && imc < 40){
         resultado.innerHTML = "Seu IMC é: "+imc.toFixed(2)+ " Obesidade Grau 2º"    
    }
    else{
        resultado.innerHTML = "Seu IMC é: "+imc.toFixed(2)+ " Obesidade Grau 3º"   
    }
}