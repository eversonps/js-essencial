// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 4))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)