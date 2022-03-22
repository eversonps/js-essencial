const notas = [7.7, 6, 4, 10]

// Sem callback

let notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}