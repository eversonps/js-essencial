const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 18.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const paraObjeto = JSON.parse(carrinho)
const carrinhoPrecos = paraObjeto.map(c => {
    return c.preco
})

console.log(carrinhoPrecos)