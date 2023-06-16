const aPlay = document.querySelector('.aPlay')
const aPause = document.querySelector('.aPause')

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const fecha = document.querySelector('.fecha')
const invitacion = document.querySelector('.invitacion')
const modalInvitacion = document.querySelector('.modalInvitacion')
const modalContador = document.querySelector('.modalContador')
const pokebola = document.querySelector('.pokebola')

const mario = document.querySelector('.mario')
const hongo = document.querySelector('.hongo')
const luigi = document.querySelector('.luigi')
const peach = document.querySelector('.peach')

const musicas = ['/audio/musica.mp3', '/audio/musica2.mp3', '/audio/musica3.mp3']
const musica = new Audio(musicas[Math.floor(Math.random() * musicas.length)])
const marioSound = new Audio('/audio/mario.mp3')
const hongoSound = new Audio('/audio/hongo.mp3')
const luigiSound = new Audio('/audio/luigi.mp3')
const peachSound = new Audio('/audio/peach.mp3')

play.addEventListener('click', () => {
  console.log(musica);
  musica.play()
  aPlay.classList.add('hidden')
  aPause.classList.toggle('hidden')
})

pause.addEventListener('click', () => {
  musica.pause()
  aPlay.classList.toggle('hidden')
  aPause.classList.toggle('hidden')
})

invitacion.addEventListener('click', () => {
  modalInvitacion.classList.toggle('hidden')
  modalContador.classList.add('hidden')
  pokebola.classList.add('hidden')
})

fecha.addEventListener('click', () => {
  modalContador.classList.toggle('hidden')
  modalInvitacion.classList.add('hidden')
  pokebola.classList.toggle('hidden')
})

mario.addEventListener('click', () => {
  marioSound.play()
  mario.classList.add('bounce-out-top')
})
hongo.addEventListener('click', () => {
  hongoSound.play()
  hongo.classList.add('bounce-out-top')
})
luigi.addEventListener('click', () => {
  luigiSound.play()
  luigi.classList.add('bounce-out-top')
})
peach.addEventListener('click', () => {
  peachSound.play()
  peach.classList.add('bounce-out-top')
})
