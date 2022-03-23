// ES8: Object.values/Object.entries

const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal

const nome = "Carla"
const pessoa = {
    nome,
    ola(){
        return "Hello friends!"
    }
}

console.log(pessoa.nome, pessoa.ola())
