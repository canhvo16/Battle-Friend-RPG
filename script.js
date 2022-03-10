let playerName1 = document.querySelector('#playerName1')
let name1 = document.querySelector('#name1')

let playerName2 = document.querySelector('#playerName2')
let name2 = document.querySelector('#name2')

let play = document.querySelector('.play')
play.style.display = 'none'
let player1 = 0
let player2 = 0

playerName1.addEventListener('click', () => {
  sessionStorage.setItem('playerNameValue1', `${name1.value}`)
  player1 += 1
  if (player1 > 0 && player2 > 0) {
    play.style.display = 'block'
  }
})

playerName2.addEventListener('click', () => {
  sessionStorage.setItem('playerNameValue2', `${name2.value}`)
  player2 += 1
  if (player1 > 0 && player2 > 0) {
    play.style.display = 'block'
  }
})
