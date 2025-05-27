//Crie um array chamado produtos, onde cada objeto representa um produto com as propriedades nome, preco e categoria. A tarefa é acessar e exibir as informações do terceiro produto na lista.


const produtos = [
    {
        nome: "Prato porcelana",
        preco: 50,
        categoria: "Mesa posta"
    },

    {
        nome: "Copo porcelana",
        preco: 30,
        categoria: "Mesa posta"
    },

    {
        nome: "Sousplat",
        preco: 25,
        categoria: "Mesa posta"
    }
]

console.log("Produto:", produtos[2].nome, "Preço:$", produtos[2].preco, "Categoria:", produtos[2].categoria);