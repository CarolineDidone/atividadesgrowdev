// Crier um programa que calcule o desconto de um produto com base no valor total:

// Se o valor for menor que R$100,00, sem desconto.
// Se o valor estiver entre R$100 e R$500, 10% de desconto.
// Se for maior que R$500, 20% de desconto.

let valorProduto = 600;
let total

if (valorProduto <= 99){
    total = valorProduto
    console.log(`Este valor de R$${total.toFixed(2)}, não se aplica para desconto`)
} else if (valorProduto >= 100 && valorProduto <=500) {
    total = valorProduto * 0.90;
    console.log(`Você ganhou 10% de desconto, seu total será de: R$${total.toFixed(2)}.`)
} else if (valorProduto >= 500) {
    total = valorProduto * 0.80;
    console.log(`Você ganhou 20% de desconto, seu total será de: R$${total.toFixed(2)}.`)
}