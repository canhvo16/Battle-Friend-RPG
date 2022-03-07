let player1Hit = document.querySelector('#move1a')
let player1Smash = document.querySelector('#move2a')
let player1PowerUp = document.querySelector('#move3a')
let player1BreakDefense = document.querySelector('#move4a')
let hp1 = document.querySelector('.hp1')
let attack1 = document.querySelector('.attack1')
let defense1 = document.querySelector('.defense1')
let player1Buttons = document.querySelectorAll('.player1')

let player2Hit = document.querySelector('#move1b')
let player2Smash = document.querySelector('#move2b')
let player2PowerUp = document.querySelector('#move3b')
let player2BreakDefense = document.querySelector('#move4b')
let hp2 = document.querySelector('.hp2')
let attack2 = document.querySelector('.attack2')
let defense2 = document.querySelector('.defense2')
let player12uttons = document.querySelectorAll('.player2')

let player1Turn = true
let player2Turn = false
let narration = document.querySelector('.narration')

let player1 = {
  name: 'Canh',
  hp: 100,
  attack: 10,
  defense: 0,
  hit: function () {
    if (player1Turn === true) {
      let damage = player1.attack - player2.defense
      player2.hp -= damage
      narration.innerHTML = `${player1.name} has hit ${player2.name}! ${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
      hp2.innerHTML = `HP: ${player2.hp}`
      player1Turn = false
      player2Turn = true
      checkWin()
    }
  },
  smash: function () {
    if (player1Turn === true) {
      let damage = player1.attack * 1.5 - player2.defense
      player2.hp -= damage
      narration.innerHTML = `${player1.name} smashed ${player2.name}! ${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
      hp2.innerHTML = `HP: ${player2.hp}`
      player1Turn = false
      player2Turn = true
      checkWin()
    }
  },
  powerUp: function () {
    if (player1Turn === true) {
      player1.attack += 2
      narration.innerHTML = `${player1.name} has increased his/her/their strength! Power now at ${player1.attack}`
      attack1.innerHTML = `Attack Power: ${player1.attack}`
      player1Turn = false
      player2Turn = true
    }
  },
  breakDefense: function () {
    if (player1Turn === true) {
      player2.defense -= 1
      narration.innerHTML = `${player1.name} has scared ${player2.name}! ${player2.name}'s defense has fallen to ${player2.defense}!`
      defense2.innerHTML = `Defense Power: ${player2.defense}`
      player1Turn = false
      player2Turn = true
    }
  }
}

let player2 = {
  name: 'Jane',
  hp: 100,
  attack: 10,
  defense: 0,
  hit: function () {
    if (player2Turn === true) {
      let damage = player2.attack - player1.defense
      player1.hp -= damage
      narration.innerHTML = `${player2.name} has hit ${player1.name}! ${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
      hp1.innerHTML = `HP: ${player1.hp}`
      player1Turn = true
      player2Turn = false
      checkWin()
    }
  },
  smash: function () {
    if (player2Turn === true) {
      let damage = player2.attack * 1.5 - player1.defense
      player1.hp -= damage
      narration.innerHTML = `${player2.name} smashed ${player1.name}! ${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
      hp1.innerHTML = `HP: ${player1.hp}`
      player1Turn = true
      player2Turn = false
      checkWin()
    }
  },
  powerUp: function () {
    if (player2Turn === true) {
      player2.attack += 2
      narration.innerHTML = `${player2.name} has increased his/her/their strength! Power now at ${player2.attack}`
      attack2.innerHTML = `Attack Power: ${player2.attack}`
      player1Turn = true
      player2Turn = false
    }
  },
  breakDefense: function () {
    if (player2Turn === true) {
      player1.defense -= 1
      narration.innerHTML = `${player2.name} has scared ${player1.name}! ${player1.name}'s defense has fallen to ${player1.defense}!`
      defense1.innerHTML = `Defense Power: ${player1.defense}`
      player1Turn = true
      player2Turn = false
    }
  }
}

hp1.innerHTML = `HP: ${player1.hp}`
attack1.innerHTML = `Attack Power: ${player1.attack}`
defense1.innerHTML = `Defense Power: ${player1.defense}`

hp2.innerHTML = `HP: ${player2.hp}`
attack2.innerHTML = `Attack Power: ${player2.attack}`
defense2.innerHTML = `Defense Power: ${player2.defense}`

narration.innerHTML = `${player1.name} will be the first to make a move!`

function checkWin() {
  if (player1.hp <= 0) {
    narration.innerHTML = `${player1.name} has been slain! ${player2.name} is victorious!`
  } else if (player2.hp <= 0) {
    narration.innerHTML = `${player2.name} has been slain! ${player1.name} is victorious!`
  }
}

player1Hit.addEventListener('click', player1.hit)
player1Smash.addEventListener('click', player1.smash)
player1PowerUp.addEventListener('click', player1.powerUp)
player1BreakDefense.addEventListener('click', player1.breakDefense)

player2Hit.addEventListener('click', player2.hit)
player2Smash.addEventListener('click', player2.smash)
player2PowerUp.addEventListener('click', player2.powerUp)
player2BreakDefense.addEventListener('click', player2.breakDefense)
