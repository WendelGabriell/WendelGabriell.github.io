let formulario = document.querySelector("#form_tri");

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    let lado1 = document.querySelector("#id_lado1").value;
    let lado2 = document.querySelector("#id_lado2").value;
    let lado3 = document.querySelector("#id_lado3").value;

    let nova_div = document.createElement("div");
    nova_div.setAttribute("class", "resultado");
    nova_div.innerHTML = 
    (lado1 == lado2 && lado2 == lado3)? "Equilatero":
    (lado1 == lado2 || lado2 == lado3 || lado3 == lado1)? "isósceles":
     "Escaleno"
     formulario.appendChild(nova_div);
})