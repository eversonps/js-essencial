Array.prototype.filter2 = function(callback){
    
}

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "iPad  Pro", preco: 4000, fragil: true },
    { nome: "Copo", preco: 11.98, fragil: true },
    { nome: "Copo de plástico", preco: 18.99, fragil: false }
]

const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))