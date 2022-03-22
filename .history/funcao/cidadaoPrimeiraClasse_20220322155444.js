// Função em JS é First-Class Object

// Forma literal

function fun1(){}

// Armazenar em uma variável

const fun2 = function(){}

// Armazenar em um array

const array = [fun1, fun2, function(a, b) { return a + b }]
console.log(array[2](2, 3))

// Armazenar em um atributo de objeto

const obj = {}
obj.falar = function(){ return "Olá!!!"}
console.log(obj.falar())

// Passar função como parametro

function run(fun){
    fun()
}

run(function() {console.log("executando")})