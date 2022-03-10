let player1Hit = document.querySelector('#move1a')
let player1Smash = document.querySelector('#move2a')
let player1PowerUp = document.querySelector('#move3a')
let player1BreakDefense = document.querySelector('#move4a')
let hp1 = document.querySelector('.hp1')
let attack1 = document.querySelector('.attack1')
let defense1 = document.querySelector('.defense1')
let player1Buttons = document.querySelectorAll('.player1')
let player1Tag = document.querySelector('.player1Name')
let hitButton1 = document.querySelector('.hit1')
let smashButton1 = document.querySelector('.smash1')
let powerButton1 = document.querySelector('.power1')
let scareButton1 = document.querySelector('.scare1')
let hit1 = 10
let smash1 = 3
let power1 = 5
let scare1 = 5
let healthBar1 = document.querySelector('#healthBar1')

let player2Hit = document.querySelector('#move1b')
let player2Smash = document.querySelector('#move2b')
let player2PowerUp = document.querySelector('#move3b')
let player2BreakDefense = document.querySelector('#move4b')
let hp2 = document.querySelector('.hp2')
let attack2 = document.querySelector('.attack2')
let defense2 = document.querySelector('.defense2')
let player2Buttons = document.querySelectorAll('.player2')
let player2Tag = document.querySelector('.player2Name')
let hitButton2 = document.querySelector('.hit2')
let smashButton2 = document.querySelector('.smash2')
let powerButton2 = document.querySelector('.power2')
let scareButton2 = document.querySelector('.scare2')
let hit2 = 10
let smash2 = 3
let power2 = 5
let scare2 = 5
let healthBar2 = document.querySelector('#healthBar2')

let player1Turn = true
let player2Turn = false
let narration = document.querySelector('.narration')

let friend1 = sessionStorage.getItem('playerNameValue1')
let friend2 = sessionStorage.getItem('playerNameValue2')

let water = document.querySelector('.water')
let fire = document.querySelector('.fire')

let player1 = {
  name: `${friend1}`,
  hp: 100,
  attack: 20,
  defense: 10,
  hit: function () {
    if (player1Turn === true && hit1 > 0) {
      water.src = ''
      setTimeout(waterIdle, 2000)
      setTimeout(fireTakeHit, 1500)
      setTimeout(fireIdle, 2000)
      let damage = player1.attack - player2.defense
      let criticalHit = Math.ceil(Math.random() * 10)
      if (criticalHit >= 9) {
        damage *= 1.5
        narration.innerHTML = `${player1.name} has hit ${player2.name} and it was a critical hit! ${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
      } else {
        narration.innerHTML = `${player1.name} has hit ${player2.name}! ${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
      }
      player2.hp -= damage
      healthBar2.value -= damage
      hp2.innerHTML = `HP: ${player2.hp}`
      if (player2.hp < 35) {
        hp2.style.color = 'red'
      }
      setTimeout(player2Move, 3000)
      player1Turn = false
      player2Turn = true
      hit1 -= 1
      hitButton1.innerHTML = `${hit1}`
      setTimeout(checkWin, 3001)
    }
  },
  smash: function () {
    if (player1Turn === true && smash1 > 0) {
      water.src = 'assets/imgs/10_sp_atk_blue.gif'
      setTimeout(waterIdle, 3200)
      setTimeout(fireTakeHit, 3000)
      setTimeout(fireIdle, 3600)
      let damage = player1.attack + 5 - player2.defense
      let criticalHit = Math.ceil(Math.random() * 10)
      if (criticalHit >= 9) {
        damage *= 1.5
        narration.innerHTML = `${player1.name} smashed ${player2.name} and it was a critical hit! ${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
      } else {
        narration.innerHTML = `${player1.name} smashed ${player2.name}! ${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
      }
      player2.hp -= damage
      healthBar2.value -= damage
      hp2.innerHTML = `HP: ${player2.hp}`
      if (player2.hp < 35) {
        hp2.style.color = 'red'
      }
      setTimeout(player2Move, 3000)
      player1Turn = false
      player2Turn = true
      smash1 -= 1
      smashButton1.innerHTML = `${smash1}`
      setTimeout(checkWin, 3001)
    }
  },
  powerUp: function () {
    if (player1Turn === true && power1 > 0) {
      water.src = 'assets/imgs/11_heal_blue.gif'
      setTimeout(waterIdle, 2500)
      player1.attack += 2
      narration.innerHTML = `${player1.name} has increased his/her/their strength! Power now at ${player1.attack}`
      attack1.innerHTML = `Attack Power: ${player1.attack}`
      setTimeout(player2Move, 3000)
      player1Turn = false
      player2Turn = true
      power1 -= 1
      powerButton1.innerHTML = `${power1}`
    }
  },
  breakDefense: function () {
    if (player1Turn === true && scare1 > 0) {
      water.src = 'assets/imgs/11_heal_blue.gif'
      setTimeout(waterIdle, 2500)
      player2.defense -= 2
      narration.innerHTML = `${player1.name} has scared ${player2.name}! ${player2.name}'s defense has fallen to ${player2.defense}!`
      defense2.innerHTML = `Defense Power: ${player2.defense}`
      setTimeout(player2Move, 3000)
      player1Turn = false
      player2Turn = true
      scare1 -= 1
      scareButton1.innerHTML = `${scare1}`
    }
  }
}

let player2 = {
  name: `${friend2}`,
  hp: 100,
  attack: 20,
  defense: 10,
  hit: function () {
    if (player2Turn === true && hit2 > 0) {
      let damage = player2.attack - player1.defense
      let criticalHit = Math.ceil(Math.random() * 10)
      if (criticalHit >= 9) {
        damage *= 1.5
        narration.innerHTML = `${player2.name} has hit ${player1.name} and it was a critical hit! ${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
      } else {
        narration.innerHTML = `${player2.name} has hit ${player1.name}! ${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
      }
      player1.hp -= damage
      healthBar1.value -= damage
      hp1.innerHTML = `HP: ${player1.hp}`
      if (player1.hp < 35) {
        hp1.style.color = 'red'
      }
      setTimeout(player1Move, 3000)
      player1Turn = true
      player2Turn = false
      hit2 -= 1
      hitButton2.innerHTML = `${hit2}`
      setTimeout(checkWin, 3001)
    }
  },
  smash: function () {
    if (player2Turn === true && smash2 > 0) {
      let damage = player2.attack + 5 - player1.defense
      let criticalHit = Math.ceil(Math.random() * 10)
      if (criticalHit >= 9) {
        damage *= 1.5
        narration.innerHTML = `${player2.name} smashed ${player1.name} and it was a critical hit! ${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
      } else {
        narration.innerHTML = `${player2.name} smashed ${player1.name}! ${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
      }
      player1.hp -= damage
      healthBar1.value -= damage
      hp1.innerHTML = `HP: ${player1.hp}`
      if (player1.hp < 35) {
        hp1.style.color = 'red'
      }
      setTimeout(player1Move, 3000)
      player1Turn = true
      player2Turn = false
      smash2 -= 1
      smashButton2.innerHTML = `${smash2}`
      setTimeout(checkWin, 3001)
    }
  },
  powerUp: function () {
    if (player2Turn === true && power2 > 0) {
      player2.attack += 2
      narration.innerHTML = `${player2.name} has increased his/her/their strength! Power now at ${player2.attack}`
      attack2.innerHTML = `Attack Power: ${player2.attack}`
      setTimeout(player1Move, 3000)
      player1Turn = true
      player2Turn = false
      power2 -= 1
      powerButton2.innerHTML = `${power2}`
    }
  },
  breakDefense: function () {
    if (player2Turn === true && scare2 > 0) {
      player1.defense -= 2
      narration.innerHTML = `${player2.name} has scared ${player1.name}! ${player1.name}'s defense has fallen to ${player1.defense}!`
      defense1.innerHTML = `Defense Power: ${player1.defense}`
      setTimeout(player1Move, 3000)
      player1Turn = true
      player2Turn = false
      scare2 -= 1
      scareButton2.innerHTML = `${scare2}`
    }
  }
}

player1Tag.innerHTML = `${friend1}`
hp1.innerHTML = `HP: ${player1.hp}`
attack1.innerHTML = `Attack Power: ${player1.attack}`
defense1.innerHTML = `Defense Power: ${player1.defense}`

player2Tag.innerHTML = `${friend2}`
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

function player1Move() {
  narration.innerHTML = `${player1.name}'s turn to make a move!`
}

function player2Move() {
  narration.innerHTML = `${player2.name}'s turn to make a move!`
}

function waterIdle() {
  water.src = 'assets/imgs/BlueDressG_Canh.gif'
}

function fireIdle() {
  fire.src = 'assets/imgs/01_idle_red(9).gif'
}

function waterTakeHit() {
  water.src = 'assets/imgs/13_take_hit_blue.gif'
}

function fireTakeHit() {
  fire.src = 'assets/imgs/10_take_hit_red.gif'
}

player1Hit.addEventListener('click', player1.hit)
player1Smash.addEventListener('click', player1.smash)
player1PowerUp.addEventListener('click', player1.powerUp)
player1BreakDefense.addEventListener('click', player1.breakDefense)

player2Hit.addEventListener('click', player2.hit)
player2Smash.addEventListener('click', player2.smash)
player2PowerUp.addEventListener('click', player2.powerUp)
player2BreakDefense.addEventListener('click', player2.breakDefense)

water.src = 'assets/imgs/BlueDressG_Canh.gif'
fire.src = 'assets/imgs/01_idle_red(9).gif'
