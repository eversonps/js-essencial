const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 18.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const carrinhoPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(carrinhoPreco)

console.log(resultado)