let player1Hit = document.querySelector('#move1a')
let player1Smash = document.querySelector('#move2a')
let player1PowerUp = document.querySelector('#move3a')
let player1BreakDefense = document.querySelector('#move4a')
let hp1 = document.querySelector('.hp1')
let attack1 = document.querySelector('.attack1')
let defense1 = document.querySelector('.defense1')

let player2Hit = document.querySelector('#move1b')
let player2Smash = document.querySelector('#move2b')
let player2PowerUp = document.querySelector('#move3b')
let player2BreakDefense = document.querySelector('#move4b')
let hp2 = document.querySelector('.hp2')
let attack2 = document.querySelector('.attack2')
let defense2 = document.querySelector('.defense2')

let player1 = {
  name: 'Canh',
  hp: 100,
  attack: 10,
  defense: 0,
  hit: function () {
    let damage = parseFloat(player1.attack)
    player2.hp -= damage
    console.log(
      `${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
    )
    hp2.innerHTML = `HP: ${player2.hp}`
  },
  smash: function () {
    let damage = parseFloat(player1.attack) * 1.5
    player2.hp -= damage
    console.log(
      `${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
    )
    hp2.innerHTML = `HP: ${player2.hp}`
  },
  powerUp: function () {
    player1.attack += 2
    console.log(
      `${player1.name} has increased his/her/their strength! Power now at ${player1.attack}`
    )
    attack1.innerHTML = `Attack Power: ${player1.attack}`
  },
  breakDefense: function () {
    player2.defense -= 1
    console.log(
      `${player1.name} has scared ${player2.name}! ${player2.name}'s defense has fallen to ${player2.defense}!`
    )
    defense2.innerHTML = `Defense Power: ${player2.defense}`
  }
}

let player2 = {
  name: 'Jane',
  hp: 100,
  attack: 10,
  defense: 0,
  hit: function () {
    let damage = parseFloat(player2.attack)
    player1.hp -= damage
    console.log(
      `${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
    )
    hp1.innerHTML = `HP: ${player1.hp}`
  },
  smash: function () {
    let damage = parseFloat(player2.attack) * 1.5
    player1.hp -= damage
    console.log(
      `${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
    )
    hp1.innerHTML = `HP: ${player1.hp}`
  },
  powerUp: function () {
    player2.attack += 2
    console.log(
      `${player2.name} has increased his/her/their strength! Power now at ${player2.attack}`
    )
    attack2.innerHTML = `Attack Power: ${player2.attack}`
  },
  breakDefense: function () {
    player1.defense -= 1
    console.log(
      `${player2.name} has scared ${player1.name}! ${player1.name}'s defense has fallen to ${player1.defense}!`
    )
    defense1.innerHTML = `Defense Power: ${player1.defense}`
  }
}

hp1.innerHTML = `HP: ${player1.hp}`
attack1.innerHTML = `Attack Power: ${player1.attack}`
defense1.innerHTML = `Defense Power: ${player1.defense}`

hp2.innerHTML = `HP: ${player2.hp}`
attack2.innerHTML = `Attack Power: ${player2.attack}`
defense2.innerHTML = `Defense Power: ${player2.defense}`

player1Hit.addEventListener('click', player1.hit)
player1Smash.addEventListener('click', player1.smash)
player1PowerUp.addEventListener('click', player1.powerUp)
player1BreakDefense.addEventListener('click', player1.breakDefense)

player2Hit.addEventListener('click', player2.hit)
player2Smash.addEventListener('click', player2.smash)
player2PowerUp.addEventListener('click', player2.powerUp)
player2BreakDefense.addEventListener('click', player2.breakDefense)
