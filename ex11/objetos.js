//CRIANDO OBJETO:

// let carro = {
//     marca: "Volkswagen",                //separado por vírgulas
//     modelo: "Gol",
//     ano: "2025",
//     cor: "Preto"
// }

// console.log(carro);
// console.log(typeof carro);




//FORMAS DE CRIAR OBJETOS:
// let carro = {}                    //criando um objeto vazio

// carro.marca = "volkswagen";
// carro.modelo = "Gol";
// carro.ano = "2025";
// carro.cor = "Branco";

// console.log(carro);




//FORMAS DE CRIAR OBJETOS 2:
let marca = "Volkswagen";
let modelo = "Gol";
let ano = 2025;
let cor = "Branco";

const carro = {
    marca,
    modelo,
    ano,
    cor
}

console.log(carro.marca);               //forma de acessar objeto
console.log(carro["modelo"]);           //outra forma de acessar objeto

carro.cor = "Azul";                     //atribuindo um novo valor para a propriedade COR

console.log(carro.cor);