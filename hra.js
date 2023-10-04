let currentPlayer = 'circle'
const whoPlays = document.querySelector('#game_icon')
const btnElement = document.querySelector('hra__button')


const tah = (event) =>{
    if (currentPlayer === 'circle'){
        event.target.classList.toggle('hra__button--circle')
        currentPlayer = 'cross'
        whoPlays.src = 'circle_black.svg'
    } else{
        event.target.classList.toggle('hra__button--cross')
        currentPlayer ='circle'
        whoPlays.src = 'cross_black.svg'
    }
event.target.disabled = true
}

document.querySelector('.hra__button:nth-child(1)').addEventListener('click',tah)
document.querySelector('.hra__button:nth-child(2)').addEventListener('click',tah)
document.querySelector('.hra__button:nth-child(3)').addEventListener('click',tah)
document.querySelector('.hra__button:nth-child(4)').addEventListener('click',tah)
document.querySelector('.hra__button:nth-child(5)').addEventListener('click',tah)
document.querySelector('.hra__button:nth-child(6)').addEventListener('click',tah)
document.querySelector('.hra__button:nth-child(7)').addEventListener('click',tah)
document.querySelector('.hra__button:nth-child(8)').addEventListener('click',tah)
document.querySelector('.hra__button:nth-child(9)').addEventListener('click',tah)
document.querySelector('.hra__button:nth-child(10)').addEventListener('click',tah)

const repeat = (event) => {
    const confirmation = window.confirm('zahraješ si znovu?');
    if (confirmation) {
      window.location.reload();
    } else {
      event.preventDefault();
    }
  };
  
  document.querySelector('#hra__restart').addEventListener('click', repeat);
