const alunos = [
    { nome: "João", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 9.2, bolsista: true },
    { nome: "Pedro", nota: 9.8, bolsista: false },
    { nome: "Gabriel", nota: 8, bolsista: false }
]

const todosBolsistas = alunos.map(a => a.bolsista).reduce((resultado, bolsista) => {
    return resultado && bolsista
})

console.log(todosBolsistas)

const algumBolsista = alunos.map(a => a.bolsista).reduce((resultado, bolsista) => {
    return resultado || bolsista
})

console.log(algumBolsista)