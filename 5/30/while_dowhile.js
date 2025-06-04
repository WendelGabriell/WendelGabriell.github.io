// let contador = 0;

// while (contador < 5) {
//     console.log(`contador: ${contador}`)
//     contador++
// }

// let i = 3;

// do {
//     console.log(`contador: ${i}`)
//     i++
// } while (i < 5);

const prompti = require('prompt-sync')();



while (true) {
    let nome = prompti("Informe um nome: \n")
    if (nome == "Yuri") {
        console.log("Acesso permitido")
        // continuar = false
        continue
    }else{
        
        console.log("Acesso negado")
    }
}