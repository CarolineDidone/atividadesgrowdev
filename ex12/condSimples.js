//1. Verificar se uma pessoa é elegível para um prêmio com base em idade e número de compras.
//Regras: a pessoa será elegível se for maior de 18 anos e tiver feito mais de 5 compras, ou se for menbro VIP.
//Utilize variáveis para simular comportamentos.

let idade = 30;
let compras = 2;
let membroVIP = true;

if (idade >= 18 && compras >=5 || membroVIP == true) {
    console.log("você receberá um prêmio!")
} else {
    console.log("Você não receberá um prêmio, se atente as regras.")
}



//2. Verificar se a pessoa tem idade suficiente para dirigir e se possui carteira de habilitação. REGRAS: só poderá dirigir se tiver pelo menos 18 anos e tiver carteira de habilitação.

let age = 18;
let habilitacao = false;

if (idade >= 18 && habilitacao == true) {
    console.log("Você possui maior idade e habilitação, pode dirigir")
} else {
    console.log("Você não possui maior idade OU não possui habilitação, desse modo não pode dirigir.")
}