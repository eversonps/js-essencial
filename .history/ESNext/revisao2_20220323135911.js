// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 4))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

// parametro default
function log(texto = "Node"){
    console.log(texto)
}

log()

// operador rest

function total(...numeros){
    
}