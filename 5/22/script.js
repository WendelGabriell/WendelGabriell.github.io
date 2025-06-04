console.log("Estou imprimindo essa informação pelo js externo.");

let numero = 42; //number
let decimal = 3.14; // number
let texto = "Olá mundo"; // String

let ativo = true; //boolean
let indefinido = undefined; // undefined
let vazio = null; //
let simbolo = Symbol("id"); //symbol
let numero_grande = 2762362997367n;


// Objetos

let pessoa = {
    nome: "Wendel",
    idade: 17
};

let cores = ["azul", "vermelho", "branco"];//Object
let hoje = new Date();//Object
let regex = /\d+/;//Object

//Verificando o Tipo

console.log(typeof numero);
console.log(typeof decimal);
console.log(typeof texto);
console.log(typeof ativo);
console.log(typeof indefinido);
console.log(typeof vazio);
console.log(typeof simbolo);
console.log(typeof numero_grande);
console.log(typeof pessoa);
console.log(pessoa.nome);
console.log(typeof cores);
console.log(typeof hoje);
console.log(typeof regex);

//Alerta

alert("Meu nome: " + pessoa.nome);
console.log(pessoa)
document.write("Valor impresso: ")
