//INCLUINDO UM ARRAY DENTRO DO OBJETO

// const livro = {                              //isso é um objeto
//     titulo: "O Senhor dos anéis",
//     autor: "J.R.R Tolkien",
//     ano: 1954,
//     categorias: ["Fantasia", "Aventura", "Clássica"]
// }

// console.log(livro.titulo);
// console.log(livro.categorias[0]);




//ARRAY DE OBJETOS - serve para gerenciar coleções de objetos que representa a mesma entidade (que são os livros)

const livros = [     //isso é um array
    { //objeto (que está na posição 0 por estar dentro de um array)
        titulo: "O Senhor dos anéis", 
        autor: "J.R.R Tolkien", 
        ano: 1954
    },

    { //objeto
        titulo: "Dom Casmurro", 
        autor: "Machado de Assis", 
        ano: 1899
    }
]

console.log(livros[1].autor);