// usar spread com objeto
const funcionario = {nome: "Maria", salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)