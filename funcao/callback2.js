const notas = [7.7, 6, 4, 10]

// Sem callback

let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback

notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)

notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)