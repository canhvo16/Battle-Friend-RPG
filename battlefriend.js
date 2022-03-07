let player1Attack = document.querySelector('#player1')
let player2Attack = document.querySelector('#player2')

let player1 = {
  name: 'Canh',
  hp: 100,
  attack: 10,
  defense: 10,
  hit: function () {
    let damage = parseFloat(player1.attack)
    player2.hp -= damage
    console.log(
      `${player2.name}'s HP has gone down by ${damage} life points. Current HP is ${player2.hp}`
    )
  }
}

let player2 = {
  name: 'Jane',
  hp: 100,
  attack: 10,
  defense: 10,
  hit: function () {
    let damage = parseFloat(player2.attack)
    player1.hp -= damage
    console.log(
      `${player1.name}'s HP has gone down by ${damage} life points. Current HP is ${player1.hp}`
    )
  }
}

player1Attack.addEventListener('click', player1.hit)
player2Attack.addEventListener('click', player2.hit)
