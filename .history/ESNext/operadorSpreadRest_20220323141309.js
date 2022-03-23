// usar spread com objeto
const funcionario = {nome: "Maria", salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com objeto
const grupoA = ["João", "Pedro", "Gloria"]
const grupoFinal = ["Maria", "Rafaela", ...grupoA]
const cloneA = {ativo: true, ...grupoA}
console.log(cloneA)