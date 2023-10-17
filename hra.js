import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'
let currentPlayer = 'circle'
const whoPlays = document.querySelector('#game_icon')
const restartElm= document.querySelector('#hra__restart')

const tah = (event) =>{
    if (currentPlayer === 'circle'){
        event.target.classList.toggle('hra__button--circle')
        currentPlayer = 'cross'
        whoPlays.src = 'cross.svg'
        event.target.disabled = true
    } else{
        event.target.classList.toggle('hra__button--cross')
        currentPlayer ='circle'
        whoPlays.src = 'circle.svg'
        event.target.disabled = true
    }
    poleTlacitek()
}

const repeat = (event) => {
    const confirmation = confirm('zahraješ si znovu?');
    if (!confirmation) {
        event.preventDefault()
    };
}
restartElm.addEventListener('click', repeat)

const btnElement = document.querySelectorAll('.hra__button')

btnElement.forEach(button=>{
    button.addEventListener('click',tah)
} )


const poleTlacitek = ()=> {
    let fieldArray=[]
    btnElement.forEach((button)=>{
    if(button.classList.contains('hra__button--circle')){
        fieldArray.push('o') 
    }else if(button.classList.contains('hra__button--cross')){
        fieldArray.push('x')
    } else{ 
        fieldArray.push('_')
    }
})
    return findWinner(fieldArray)
    }

const winner = poleTlacitek()
if(winner === 'o' || winner === 'x'){
    setTimeout(()=>{
    alert(`Vyhrál hráč ${winner}.`)
    },500)
    setTimeout(()=>{
      location.reload()
   },1000)
   }
if (winner==='tie'){
    setTimeout(() =>{
        alert(`Remíza`)
    },500)
    setTimeout(()=>{
        location.reload()
    },1000)
}

 
