document
  .querySelector("#formulario")
  .addEventListener("submit", (evento) => {
    evento.preventDefault();

    let altura = document.getElementById("id_altura").value;
    altura = parseFloat(altura.replace(",", "."));
    let peso = document.getElementById("id_peso").value;
    peso = Number(peso.replace(",", "."));

    let resultado = document.getElementById("resultado");


    let imc = (peso / (altura * altura)).toFixed(1)
    console.log(altura + " " + peso + " " + imc);


    let nome;
    nome = document.querySelector("#id_nome").value;
    resultado.innerHTML = "Olá, " + nome + "! <br>Seu IMC é: " + imc + "<br>Sua classificação é: ";

    if (imc <= 18.5) {
        resultado.innerHTML += "<strong>Abaixo do peso</strong>";
    } else if (imc > 18.5 && imc <= 24.9) {
        resultado.innerHTML += "<strong>peso normal</strong>";
    } else if (imc >= 25.0 && imc < 30.0) {
        resultado.innerHTML += "<strong>Sobrepeso</strong>";
    } else if(imc >= 30 && imc <= 39){
        resultado.innerHTML += "<strong>obesidade</strong>";
    }else if (imc >= 40) {
        resultado.innerHTML += "<strong>obesidade extrema</strong>";  
    }else{
        resultado.innerHTML += "<strong>Erro</strong>";
    }
  });
