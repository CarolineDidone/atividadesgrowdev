// 1. Crie 3 frutas, cada uma usando var, let e const e imprima cada uma das frutas no console;
// 2. Tente alterar o nome das frutas que estão com var e let;
// 3. Tente modificar o nome da fruta que está com cons.

var fruta1 = "Melancia"; //'var'em desuso

let fruta2 = "Abacaxi"; // 'let' melhor prática para declarar variável

const fruta = "Morango";

fruta1 = "Kiwi";

fruta2 = "Limão"; //não declarar o tipo de variável, apenas chamar pelo nome da 'let'

fruta = "Pinha"; // valor de constante é fixo, não se altera

console.log(fruta1, fruta2, fruta);