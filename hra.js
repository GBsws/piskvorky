import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'
let currentPlayer = 'circle'
const whoPlays = document.querySelector('#game_icon')
const btnElement = document.querySelector('hra__button')

const tah = (event) =>{
    if (currentPlayer === 'circle'){
        event.target.classList.toggle('hra__button--circle')
        currentPlayer = 'cross'
        whoPlays.src = 'cross_black.svg'
    } else{
        event.target.classList.toggle('hra__button--cross')
        currentPlayer ='circle'
        whoPlays.src = 'circle_black.svg'
    }
event.target.disabled = true


}
const tahElm = document.querySelectorAll('.hra__button')
tahElm.forEach((button)=>{
    button.addEventListener('click',tah)
})

//--------------------------------------------------------------------

const repeat = (event) => {
    const confirmation = confirm('zahraješ si znovu?');
    if (!confirmation) {
      event.preventDefault()
  };
}
  document.querySelector('#hra__restart').addEventListener('click', repeat);
