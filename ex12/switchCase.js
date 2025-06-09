// Crie uma estrutura switch que recebe uma variável nota (A, B, C, D ou F) e exiba uma mensagem correspondente a avaliação:
//A: Excelente
//B: Muito bom
//C: Bom
//D: Preciso melhorar
//E: Reprovado

//Para qualquer outra nota, exiba: Nota inválida

let nota = "A";

let mensagem

switch(nota) {
    case "A" :
        mensagem = "Excelente"
        break;

    case "B" :
        mensagem = "Muito bom"
        break;

    case "C" :
        mensagem = "Bom"
        break;

    case "D" : 
        mensagem = "Precisa melhorar"
        break;
    
    case "E" : 
        mensagem = "Reprovado"
        break;

    default:
        mensagem = "Nota inválida"
}

console.log(mensagem);