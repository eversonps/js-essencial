function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa