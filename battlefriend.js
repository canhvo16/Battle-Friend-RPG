class Fighter {
  constructor(name) {
    this.name = name
    this.hp = 100
    this.attack = 10
    this.defense = 10
  }
  attack1() {
    let damage = this.attack
    jane.hp -= damage
    console.log(
      `${jane.name}'s HP has gone down by ${damage} life points. Current HP is ${jane.hp}`
    )
  }
}

let canh = new Fighter('Canh')

let jane = new Fighter('Jane')

console.log(canh)
console.log(jane)
