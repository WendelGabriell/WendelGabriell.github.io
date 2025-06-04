document.querySelector("#formulario").addEventListener("submit", (evento) => {
    evento.preventDefault();
    let numero = Number (document.getElementById("id_numero").value)

    let operacao = document.getElementById("id_operacao").value;
    let resultado = document.getElementById("resultado");

    switch (operacao) {
        case '+':
            for (let i = 0; i <= 10; i++) {
                resultado.innerHTML += `<br>  ${numero} ${operacao} ${i} = ${numero + i}`
                
            }
            break;
        case '-':
            for (let i = 0; i <= 10; i++) {
                resultado.innerHTML += `<br>  ${numero} ${operacao} ${i} = ${numero - i}`
                
            }
            break;
        case '*':
            for (let i = 0; i <= 10; i++) {
                resultado.innerHTML += `<br>  ${numero} ${operacao} ${i} = ${numero * i}`
                
            }
            break;
        case '/':
            for (let i = 0; i <= 10; i++) {
                resultado.innerHTML +=  `<br>  ${numero} ${operacao} ${i} = ${(numero / i).toFixed(2)}`
                
            }
            break;
        
    
        default:
            break;
    }


})