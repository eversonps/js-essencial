function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
    }.bind(this), 1000)
}

new Pessoa