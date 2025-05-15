class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = "";

    }

    DefinirAtaque(){
        let ataque = ""
        switch (this.tipo){
            case "mago":
                this.ataque = "magia";
                break
            case "guerreiro":
                this.ataque = "espada";
                break
            case "monge":
                this.ataque = "artes marciais";
                break
            case "ninja":
                this.ataque = "shuriken";
                break
            default:
                this.ataque = "Um ataque desconhecido";

        } 
    }

    atacar(){
        this.DefinirAtaque();
        console.log(`Um Herói forte chamado ${this.nome} com ${this.idade} anos o destemido ${this.tipo} atacou usando ${this.ataque}.`);

    }
}

let heroiGuerreiro =  new Heroi("Moises", "28", "Guerreiro")
let heroiMago = new Heroi("Felipe", "30", "Mago")
let heroiMonge = new Heroi("Marcos", "40","Monge" )
let heroNinja = new Heroi("lucas", "22", "Ninja")

heroiGuerreiro.atacar()
heroiMago.atacar();
heroiMonge.atacar()
heroNinja.atacar();


// Outra forma de fazer 

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }
    console.log(`O ${this.tipo} destemido, chamado ${this.nome}, ${this.idade} anos atacou usando ${ataque}.`);
  }
}

let mago = new Heroi("Merlin", "150", "Mago");
let guerreiro = new Heroi("Arthur", "35", "Guerreiro");
let monge = new Heroi("Lúcios", "25", "Monge");
let ninja = new Heroi("Lucas", "40", "Ninja")

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();