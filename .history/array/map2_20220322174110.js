const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 18.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]

const paraObjeto = json => JSON.parse(json)
const carrinhoPreco = produto => produto.preco

const carrinhoPrecos = paraObjeto(carrinho).map(c => {
    return c.preco
})

console.log(carrinhoPrecos)