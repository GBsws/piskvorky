import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'
let currentPlayer = 'circle'
const whoPlays = document.querySelector('#game_icon')
const btnElement = document.querySelector('hra__button')

const tah = (event) =>{
    if (currentPlayer === 'circle'){
        event.target.classList.toggle('hra__button--circle')
        currentPlayer = 'cross'
        whoPlays.src = 'cross.svg'
    } else{
        event.target.classList.toggle('hra__button--cross')
        currentPlayer ='circle'
        whoPlays.src = 'circle.svg'
    }
    event.target.disabled = true
    
}
let btnArray = []
const tahElm = document.querySelectorAll('.hra__button')
tahElm.forEach(button=>{
    button.addEventListener('click',tah)
})
tahElm.forEach(kostka=>{
    let sign = kostka.textContent
    if(sign===''){
        sign='_'
    }
    btnArray.push(sign)
})
console.log(tahElm)

const gameFinish = findWinner(btnArray)
if(gameFinish.src === 'circle_black.svg' || gameFinish.src === 'cross_black.svg'){
    console.log('Vyhrál', gameFinish)
} else if (gameFinish==='tie'){
    console.log ('remiza')
} else {
    console.log('Zatim nikdo nevyhrál')
}



//--------------------------------------------------------------------

const repeat = (event) => {
    const confirmation = confirm('zahraješ si znovu?');
    if (!confirmation) {
      event.preventDefault()
  };
}
  document.querySelector('#hra__restart').addEventListener('click', repeat);
