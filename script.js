let playerName1 = document.querySelector('#playerName1')
let name1 = document.querySelector('#name1')

let playerName2 = document.querySelector('#playerName2')
let name2 = document.querySelector('#name2')

playerName1.addEventListener('click', () => {
  sessionStorage.setItem('playerNameValue1', `${name1.value}`)
})

playerName2.addEventListener('click', () => {
  sessionStorage.setItem('playerNameValue2', `${name2.value}`)
})
