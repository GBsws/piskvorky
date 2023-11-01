import { findWinner } from "https://unpkg.com/piskvorky@0.1.4";
let currentPlayer = "circle";
const whoPlays = document.querySelector("#game_icon");
const restartElm = document.querySelector("#hra__restart");
const btnElement = document.querySelectorAll(".hra__button");

const vytvorPoleSymbolu = ()=> {
  const poleSymbolu=[]
  btnElement.forEach((button)=>{
  if(button.classList.contains('hra__button--circle')){
      poleSymbolu.push('o') 
  }else if(button.classList.contains('hra__button--cross')){
     poleSymbolu.push('x')
  } else{ 
      poleSymbolu.push('_')
        }
  })
  return poleSymbolu
}

//časovač na zprávy o tom, kdo vyhrál
const vyhodnotHru =()=>{
  const poleSymbolu= vytvorPoleSymbolu()
  const winner = findWinner(poleSymbolu);
  if (winner === "o" || winner === "x") {
    setTimeout(() => {
      alert(`Vyhrál hráč ${winner}.`);
    }, 500);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
  if (winner === "tie") {
    setTimeout(() => {
      alert(`Remíza`);
    }, 500);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
};
//vyměňování kroužků a křížků
const provedTah = (event) => {
  if (currentPlayer === "circle") {
    event.target.classList.toggle("hra__button--circle");
    currentPlayer = "cross";
    whoPlays.src = "cross.svg";
    event.target.disabled = true;
    const aktualniStavPole= vytvorPoleSymbolu()
    //poleTlacitek()
    //console.log(fieldArray)
    tahAi(aktualniStavPole);//muze byt i tahAi(poleTlacitek())
  } else {
    event.target.classList.toggle("hra__button--cross");
    currentPlayer = "circle";
    whoPlays.src = "circle.svg";
    event.target.disabled = true;
  }
  vyhodnotHru()
}
//otazka na restart hry
const opakujHru = (event) => {
  const confirmation = confirm("zahraješ si znovu?");
  if (!confirmation) {
    event.preventDefault();
  }
};

restartElm.addEventListener("click", opakujHru);

btnElement.forEach((button) => {
  button.addEventListener("click", provedTah);
});

//napojení AI, která hraje 'x'
const tahAi = async (poleTlacitek) => {
  const response = await fetch(
    "https://piskvorky.czechitas-podklady.cz/api/suggest-next-move",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ board: poleTlacitek, player: 'x' }),
    }
  );
  const data = await response.json();
  const { x, y } = data.position;
  const field = btnElement[x + y * 10];
  console.log(`x:${x}, y:${y}`)
  field.click();
};

// import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';
// let currentPlayer = 'circle';
// const whoPlays = document.querySelector('#game_icon');
// const restartElm = document.querySelector('#hra__restart');
// const btnElement = document.querySelectorAll('.hra__button');

// const vytvorPoleSymbolu = () => {
//   const poleSymbolu = [];
//   btnElement.forEach((button) => {
//     if (button.classList.contains('hra__button--circle')) {
//       poleSymbolu.push('o');
//     } else if (button.classList.contains('hra__button--cross')) {
//       poleSymbolu.push('x');
//     } else {
//       poleSymbolu.push('_');
//     }
//   });

//   return poleSymbolu;
// };

// const vyhodnotHru = () => {
//   const poleSymbolu = vytvorPoleSymbolu();
//   const winner = findWinner(poleSymbolu);

//   if (winner === 'o' || winner === 'x') {
//     setTimeout(() => {
//       alert(`Vyhrál hráč ${winner}.`);
//     }, 50);
//     setTimeout(() => {
//       location.reload();
//     }, 1000);
//   }

//   if (winner === 'tie') {
//     setTimeout(() => {
//       alert(`Remíza`);
//     }, 50);
//     setTimeout(() => {
//       location.reload();
//     }, 1000);
//   }
// };

// const provedTah = (event) => {
//   if (currentPlayer === 'circle') {
//     event.target.classList.toggle('hra__button--circle');
//     currentPlayer = 'cross';
//     whoPlays.src = 'cross.svg';
//     event.target.disabled = true;
//     tahAi(vytvorPoleSymbolu());
//   } else {
//     event.target.classList.toggle('hra__button--cross');
//     currentPlayer = 'circle';
//     whoPlays.src = 'circle.svg';
//     event.target.disabled = true;
//   }

//   vyhodnotHru();
// };

// const hrajZnovu = (event) => {
//   const confirmation = confirm('zahraješ si znovu?');
//   if (!confirmation) {
//     event.preventDefault();
//   }
// };

// restartElm.addEventListener('click', hrajZnovu);

// btnElement.forEach((button) => {
//   button.addEventListener('click', provedTah);
// });

// //napojení AI, která hraje 'x'
// const tahAi = async (poleTlacitek) => {
//   const response = await fetch(
//     'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ board: poleTlacitek, player: 'x' }),
//     },
//   );

//   const data = await response.json();
//   const { x, y } = data.position;
//   const field = btnElement[x + y * 10];
//   field.click();
// };