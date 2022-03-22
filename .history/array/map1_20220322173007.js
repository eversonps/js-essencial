const nums = [1, 2, 3, 4, 5]

// For com propósito

let resultado = nums.map(function(num){
    return num * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed2().replace(".", ",")}`