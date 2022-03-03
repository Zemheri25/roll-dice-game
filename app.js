let player1score = document.getElementById("score--0");
let player1current = document.getElementById("current--0");
let player2score = document.getElementById("score--1");
let player2current = document.getElementById("current--1");
let newbutton = document.querySelector(".btn--new");
let rollbutton = document.querySelector(".btn--roll");
let holdbutton = document.querySelector(".btn--hold");

let player1div = document.querySelector(".player--0");
let player2div = document.querySelector(".player--1");
let container = document.querySelector(".container");


let dicelist = [];
rollbutton.addEventListener("click", () => {
  let mylist = [1, 2, 3, 4, 5, 6];

  a = Math.floor(Math.random() * 6);
  console.log(mylist[a]);
  

  let image1 = document.createElement("img");
  image1.src = `./images/dice-${mylist[a]}.png`;
  image1.classList.add("dice");
  dicelist.push(image1)

  container.appendChild(image1);

  

  if (player1div.classList.contains("player--active")) {
    if (mylist[a] !== 1) {
      player1current.innerHTML = Number(player1current.innerHTML) + mylist[a];
    } else {
      player2div.classList.add("player--active");
      player1div.classList.remove("player--active");
      player1current.innerHTML = 0;
    }
  } else if (player2div.classList.contains("player--active")) {
    if (mylist[a] !== 1) {
      player2current.innerHTML = Number(player2current.innerHTML) + mylist[a];
    } else {
      player1div.classList.add("player--active");
      player2div.classList.remove("player--active");
      player2current.innerHTML = 0;
    }
  }
});




holdbutton.addEventListener("click", () => {
    if(player1div.classList.contains("player--active")) {
        player1score.innerHTML =Number(player1score.innerHTML) +  Number(player1current.innerHTML)
        player1current.innerHTML = 0;
        player1div.classList.remove("player--active");
        player2div.classList.add("player--active")
    }
    else if(player2div.classList.contains("player--active")) {
        player2score.innerHTML =Number(player2score.innerHTML) +  Number(player2current.innerHTML)
        player2current.innerHTML = 0;
        player2div.classList.remove("player--active");
        player1div.classList.add("player--active")
    }

    
});


newbutton.addEventListener("click", () => {
    player1div.classList.add("player--active");
    player2div.classList.remove("player--active");

    player1current.innerHTML = 0;
    player2current.innerHTML = 0;
    player1score.innerHTML = 0;
    player2score.innerHTML = 0;

    for(let i = 0; i < dicelist.length; i++) {
      container.removeChild(dicelist[i])
    }
})