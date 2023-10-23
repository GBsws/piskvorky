import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4'
let currentPlayer = 'circle'
const whoPlays = document.querySelector('#game_icon')
const restartElm= document.querySelector('#hra__restart')
const btnElement = document.querySelectorAll('.hra__button')
//vyměňování kroužků a křížků
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

//funkce na vytvoření pole a vkládání jednolivých znaků

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
//časovač na zprávy o tom, kdo vyhrál
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
if(currentPlayer==='cross'){
    tahAi(fieldArray)
}
}
}

//otzka na restar hry
const repeat = (event) => {
    const confirmation = confirm('zahraješ si znovu?');
    if (!confirmation) {
        event.preventDefault()
    };
}
restartElm.addEventListener('click', repeat)

btnElement.forEach(button=>{
    button.addEventListener('click',tah)
} )

//napojení AI, která hraje 'x'
const tahAi=async()=>{
    const response = await fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({board:fieldArray, player:'x',
        })
    })
    const data =await response.json();
    const{x,y}=data.position;
    const field = btnElement[x+y*10];
    field.click();
    }
    
   