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
let healthBar1 = document.querySelector('#healthBar1')
let friend1 = sessionStorage.getItem('playerNameValue1')
let player1Score = document.querySelector('.player1Score')
let water = document.querySelector('.water')
let player1Turn = true
let playerScore1 = 0
let hit1 = 10
let smash1 = 3
let power1 = 5
let scare1 = 5

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
let healthBar2 = document.querySelector('#healthBar2')
let friend2 = sessionStorage.getItem('playerNameValue2')
let player2Score = document.querySelector('.player2Score')
let fire = document.querySelector('.fire')
let player2Turn = false
let playerScore2 = 0
let hit2 = 10
let smash2 = 3
let power2 = 5
let scare2 = 5

let narration = document.querySelector('.narration')
let rematch = document.querySelector('.rematch')
let darkMode = document.querySelector('.darkMode')
let dark = 2
let body = document.querySelector('body')
let header = document.querySelector('.header')

let player1 = {
  name: `${friend1}`,
  hp: 100,
  attack: 20,
  defense: 10,
  hit: function () {
    if (player1Turn === true && hit1 > 0) {
      water.src = 'assets/imgs/07_1_atk_blue.gif'
      setTimeout(waterIdle, 700)
      setTimeout(fireTakeHit, 1000)
      setTimeout(fireIdle, 1600)
      let damage = player1.attack - player2.defense
      let criticalHit = Math.ceil(Math.random() * 10)
      if (criticalHit >= 9) {
        damage *= 1.5
        player2.hp -= damage
        let i = 0
        let speed = 23
        let sentence = `${player1.name} has hit ${player2.name} and it was a critical hit! ${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
        narration.innerHTML = ''
        function spellIt() {
          if (i < sentence.length) {
            narration.innerHTML += sentence.charAt(i)
            i += 1
            setTimeout(spellIt, speed)
          }
        }
        spellIt()
      } else {
        player2.hp -= damage
        let i = 0
        let speed = 30
        let sentence = `${player1.name} has hit ${player2.name}! ${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
        narration.innerHTML = ''
        function spellIt() {
          if (i < sentence.length) {
            narration.innerHTML += sentence.charAt(i)
            i += 1
            setTimeout(spellIt, speed)
          }
        }
        spellIt()
      }
      healthBar2.value -= damage
      hp2.innerHTML = `HP: ${player2.hp}`
      if (player2.hp < 35) {
        hp2.style.color = 'red'
      }
      setTimeout(player2Move, 3000)
      player1Turn = false
      setTimeout(playerTurn2, 3500)
      hit1 -= 1
      hitButton1.innerHTML = `${hit1}`
      setTimeout(checkWin, 3601)
    }
  },
  smash: function () {
    if (player1Turn === true && smash1 > 0) {
      water.src = 'assets/imgs/10_sp_atk_blue.gif'
      setTimeout(waterIdle, 3200)
      setTimeout(fireTakeHit, 3500)
      setTimeout(fireIdle, 4000)
      let damage = player1.attack + 5 - player2.defense
      let criticalHit = Math.ceil(Math.random() * 10)
      if (criticalHit >= 9) {
        damage *= 1.5
        player2.hp -= damage
        let i = 0
        let speed = 30
        let sentence = `${player1.name} smashed ${player2.name} and it was a critical hit! ${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
        narration.innerHTML = ''
        function spellIt() {
          if (i < sentence.length) {
            narration.innerHTML += sentence.charAt(i)
            i += 1
            setTimeout(spellIt, speed)
          }
        }
        spellIt()
      } else {
        player2.hp -= damage
        let i = 0
        let speed = 40
        let sentence = `${player1.name} smashed ${player2.name}! ${player2.name}'s HP has gone down by ${damage} life points! Current HP is ${player2.hp}!`
        narration.innerHTML = ''
        function spellIt() {
          if (i < sentence.length) {
            narration.innerHTML += sentence.charAt(i)
            i += 1
            setTimeout(spellIt, speed)
          }
        }
        spellIt()
      }

      healthBar2.value -= damage
      hp2.innerHTML = `HP: ${player2.hp}`
      if (player2.hp < 35) {
        hp2.style.color = 'red'
      }
      setTimeout(player2Move, 4000)
      player1Turn = false
      setTimeout(playerTurn2, 4500)
      smash1 -= 1
      smashButton1.innerHTML = `${smash1}`
      setTimeout(checkWin, 4601)
    }
  },
  powerUp: function () {
    if (player1Turn === true && power1 > 0) {
      water.src = 'assets/imgs/11_heal_blue.gif'
      setTimeout(waterIdle, 2500)
      player1.attack += 2
      let i = 0
      let speed = 25
      let sentence = `${player1.name} has increased his/her/their strength! Power now at ${player1.attack}!`
      narration.innerHTML = ''
      function spellIt() {
        if (i < sentence.length) {
          narration.innerHTML += sentence.charAt(i)
          i += 1
          setTimeout(spellIt, speed)
        }
      }
      spellIt()
      attack1.innerHTML = `Attack Power: ${player1.attack}`
      setTimeout(player2Move, 2500)
      player1Turn = false
      setTimeout(playerTurn2, 3000)
      power1 -= 1
      powerButton1.innerHTML = `${power1}`
    }
  },
  breakDefense: function () {
    if (player1Turn === true && scare1 > 0) {
      water.src = 'assets/imgs/11_heal_blue.gif'
      setTimeout(waterIdle, 2500)
      player2.defense -= 2
      let i = 0
      let speed = 25
      let sentence = `${player1.name} has scared ${player2.name}! ${player2.name}'s defense has fallen to ${player2.defense}!`
      narration.innerHTML = ''
      function spellIt() {
        if (i < sentence.length) {
          narration.innerHTML += sentence.charAt(i)
          i += 1
          setTimeout(spellIt, speed)
        }
      }
      spellIt()
      defense2.innerHTML = `Defense Power: ${player2.defense}`
      setTimeout(player2Move, 2500)
      player1Turn = false
      setTimeout(playerTurn2, 3000)
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
      fire.src = 'assets/imgs/05_1_atk_red.gif'
      setTimeout(fireIdle, 1000)
      setTimeout(waterTakeHit, 1300)
      setTimeout(waterIdle, 1900)
      let damage = player2.attack - player1.defense
      let criticalHit = Math.ceil(Math.random() * 10)
      if (criticalHit >= 9) {
        damage *= 1.5
        player1.hp -= damage
        let i = 0
        let speed = 23
        let sentence = `${player2.name} has hit ${player1.name} and it was a critical hit! ${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
        narration.innerHTML = ''
        function spellIt() {
          if (i < sentence.length) {
            narration.innerHTML += sentence.charAt(i)
            i += 1
            setTimeout(spellIt, speed)
          }
        }
        spellIt()
      } else {
        player1.hp -= damage
        let i = 0
        let speed = 30
        let sentence = `${player2.name} has hit ${player1.name}! ${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
        narration.innerHTML = ''
        function spellIt() {
          if (i < sentence.length) {
            narration.innerHTML += sentence.charAt(i)
            i += 1
            setTimeout(spellIt, speed)
          }
        }
        spellIt()
      }
      healthBar1.value -= damage
      hp1.innerHTML = `HP: ${player1.hp}`
      if (player1.hp < 35) {
        hp1.style.color = 'red'
      }
      setTimeout(player1Move, 3000)
      setTimeout(playerTurn1, 3500)
      player2Turn = false
      hit2 -= 1
      hitButton2.innerHTML = `${hit2}`
      setTimeout(checkWin, 3601)
    }
  },
  smash: function () {
    if (player2Turn === true && smash2 > 0) {
      fire.src = 'assets/imgs/08_sp_atk_red(17).gif'
      setTimeout(fireIdle, 1800)
      setTimeout(waterTakeHit, 2100)
      setTimeout(waterIdle, 2700)
      let damage = player2.attack + 5 - player1.defense
      let criticalHit = Math.ceil(Math.random() * 10)
      if (criticalHit >= 9) {
        damage *= 1.5
        player1.hp -= damage
        let i = 0
        let speed = 23
        let sentence = `${player2.name} smashed ${player1.name} and it was a critical hit! ${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
        narration.innerHTML = ''
        function spellIt() {
          if (i < sentence.length) {
            narration.innerHTML += sentence.charAt(i)
            i += 1
            setTimeout(spellIt, speed)
          }
        }
        spellIt()
      } else {
        player1.hp -= damage
        let i = 0
        let speed = 30
        let sentence = `${player2.name} smashed ${player1.name}! ${player1.name}'s HP has gone down by ${damage} life points! Current HP is ${player1.hp}!`
        narration.innerHTML = ''
        function spellIt() {
          if (i < sentence.length) {
            narration.innerHTML += sentence.charAt(i)
            i += 1
            setTimeout(spellIt, speed)
          }
        }
        spellIt()
      }
      healthBar1.value -= damage
      hp1.innerHTML = `HP: ${player1.hp}`
      if (player1.hp < 35) {
        hp1.style.color = 'red'
      }
      setTimeout(player1Move, 3000)
      setTimeout(playerTurn1, 3500)
      player2Turn = false
      smash2 -= 1
      smashButton2.innerHTML = `${smash2}`
      setTimeout(checkWin, 3601)
    }
  },
  powerUp: function () {
    if (player2Turn === true && power2 > 0) {
      fire.src = 'assets/imgs/09_defend_fire.gif'
      setTimeout(fireIdle, 1100)
      player2.attack += 2
      let i = 0
      let speed = 25
      let sentence = `${player2.name} has increased his/her/their strength! Power now at ${player2.attack}!`
      narration.innerHTML = ''
      function spellIt() {
        if (i < sentence.length) {
          narration.innerHTML += sentence.charAt(i)
          i += 1
          setTimeout(spellIt, speed)
        }
      }
      spellIt()
      attack2.innerHTML = `Attack Power: ${player2.attack}`
      setTimeout(player1Move, 2500)
      setTimeout(playerTurn1, 3000)
      player2Turn = false
      power2 -= 1
      powerButton2.innerHTML = `${power2}`
    }
  },
  breakDefense: function () {
    if (player2Turn === true && scare2 > 0) {
      fire.src = 'assets/imgs/09_defend_fire.gif'
      setTimeout(fireIdle, 1100)
      player1.defense -= 2
      let i = 0
      let speed = 25
      let sentence = `${player2.name} has scared ${player1.name}! ${player1.name}'s defense has fallen to ${player1.defense}!`
      narration.innerHTML = ''
      function spellIt() {
        if (i < sentence.length) {
          narration.innerHTML += sentence.charAt(i)
          i += 1
          setTimeout(spellIt, speed)
        }
      }
      spellIt()
      defense1.innerHTML = `Defense Power: ${player1.defense}`
      setTimeout(player1Move, 2500)
      setTimeout(playerTurn1, 3000)
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
water.src = 'assets/imgs/BlueDressG_Canh.gif'
fire.src = 'assets/imgs/01_idle_red(9).gif'
player1Score.innerHTML = `${playerScore1}`
player2Score.innerHTML = `${playerScore2}`

function checkWin() {
  if (player1.hp <= 0) {
    let i = 0
    let speed = 20
    let sentence = `${player1.name} has been slain! ${player2.name} is victorious! Would you like a rematch?`
    narration.innerHTML = ''
    function spellIt() {
      if (i < sentence.length) {
        narration.innerHTML += sentence.charAt(i)
        i += 1
        setTimeout(spellIt, speed)
      }
    }
    spellIt()
    water.src = 'assets/imgs/14_death_blue.gif'
    setTimeout(waterDead, 1200)
    playerScore2 += 1
    player2Score.innerHTML = `${playerScore2}`
  } else if (player2.hp <= 0) {
    let i = 0
    let speed = 20
    let sentence = `${player2.name} has been slain! ${player1.name} is victorious! Would you like a rematch?`
    narration.innerHTML = ''
    function spellIt() {
      if (i < sentence.length) {
        narration.innerHTML += sentence.charAt(i)
        i += 1
        setTimeout(spellIt, speed)
      }
    }
    spellIt()
    fire.src = 'assets/imgs/11_death_red.gif'
    setTimeout(fireDead, 1300)
    playerScore1 += 1
    player1Score.innerHTML = `${playerScore1}`
  }
}

function player1Move() {
  let i = 0
  let speed = 20
  let sentence = `${player1.name}'s turn to make a move!`
  narration.innerHTML = ''
  function spellIt() {
    if (i < sentence.length) {
      narration.innerHTML += sentence.charAt(i)
      i += 1
      setTimeout(spellIt, speed)
    }
  }
  spellIt()
}

function player2Move() {
  let i = 0
  let speed = 20
  let sentence = `${player2.name}'s turn to make a move!`
  narration.innerHTML = ''
  function spellIt() {
    if (i < sentence.length) {
      narration.innerHTML += sentence.charAt(i)
      i += 1
      setTimeout(spellIt, speed)
    }
  }
  spellIt()
}

function playerTurn1() {
  player1Turn = true
}

function playerTurn2() {
  player2Turn = true
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

function waterDead() {
  water.src = 'assets/imgs/death_blue.png'
}

function fireDead() {
  fire.src = 'assets/imgs/death_red.png'
}

player1Hit.addEventListener('click', player1.hit)
player1Smash.addEventListener('click', player1.smash)
player1PowerUp.addEventListener('click', player1.powerUp)
player1BreakDefense.addEventListener('click', player1.breakDefense)

player2Hit.addEventListener('click', player2.hit)
player2Smash.addEventListener('click', player2.smash)
player2PowerUp.addEventListener('click', player2.powerUp)
player2BreakDefense.addEventListener('click', player2.breakDefense)

rematch.addEventListener('click', () => {
  hit1 = 10
  smash1 = 3
  power1 = 5
  scare1 = 5
  hit2 = 10
  smash2 = 3
  power2 = 5
  scare2 = 5
  player1.hp = 100
  player2.hp = 100
  player1.attack = 20
  player2.attack = 20
  player1.defense = 10
  player2.defense = 10
  if (dark % 2 === 1) {
    hp1.style.color = 'gold'
    hp2.style.color = 'gold'
  } else {
    hp1.style.color = 'black'
    hp2.style.color = 'black'
  }
  hp1.innerHTML = `HP: ${player1.hp}`
  hp2.innerHTML = `HP: ${player2.hp}`
  healthBar1.value = 100
  healthBar2.value = 100
  attack1.innerHTML = `Attack Power: ${player1.attack}`
  attack2.innerHTML = `Attack Power: ${player2.attack}`
  defense1.innerHTML = `Defense Power: ${player1.defense}`
  defense2.innerHTML = `Defense Power: ${player2.defense}`
  hitButton1.innerHTML = `${hit1}`
  smashButton1.innerHTML = `${smash1}`
  powerButton1.innerHTML = `${power1}`
  scareButton1.innerHTML = `${scare1}`
  hitButton2.innerHTML = `${hit2}`
  smashButton2.innerHTML = `${smash2}`
  powerButton2.innerHTML = `${power2}`
  scareButton2.innerHTML = `${scare2}`
  if (player1Turn === true) {
    narration.innerHTML = `${player1.name} will be the first to make a move!`
    water.src = 'assets/imgs/BlueDressG_Canh.gif'
  } else if (player2Turn === true) {
    narration.innerHTML = `${player2.name} will be the first to make a move!`
    fire.src = 'assets/imgs/01_idle_red(9).gif'
  }
})

darkMode.addEventListener('click', () => {
  body.classList.toggle('dark')
  header.classList.toggle('dark')
  hp1.classList.toggle('dark')
  hp2.classList.toggle('dark')
  dark += 1
})
