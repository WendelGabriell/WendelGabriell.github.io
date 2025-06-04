function saudacao(nome){
    return `Olá, ${nome}!`
}
console.log(saudacao("Wendel"))

// (function(){
//     console.log("Esta função é executada imediatamente.")();
// })
const dobro = (numero) =>{
    return numero * 2
}
console.log(dobro(3))

//variavel que recebe uma função com o parametro "numero" e retorna esse parametro * 3
const triplo = numero => numero * 3

//Arrow function sem parametros
const euAmoDeus = () => "olá mundo!"
console.log(euAmoDeus())

const soma = (a,b,c) => a+b+c;
console.log(soma(7,7,7))