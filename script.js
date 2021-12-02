const button = document.getElementById("button");
const restart = document.getElementById("restart");
const accumulate = document.getElementById("accumulate");
let totals = [];
const dice = document.getElementById("dice");
const enterButton = document.getElementById("player1EnterButton");
const welcome = document.getElementById("welcomePage");
const play1screen = document.getElementById("player1screen");

enterButton.addEventListener("click", () => {
  welcome.style.display = "none";
  setTimeout(() => {
    play1screen.style.filter = "blur(7px)";
  }, 300);
  setTimeout(() => {
    play1screen.style.filter = "blur(3px";
  }, 600);
  setTimeout(() => {
    play1screen.style.filter = "blur(0px)";
  }, 900);
});

let reset = true;

if ((reset = true)) {
  reset = false;

  button.addEventListener("click", () => {
    restart.disabled = true;
    restart.textContent = "Restart";
    dice.classList.add("dice6");
    setTimeout(() => {
      dice.classList.remove("dice6");
      dice.classList.add("dice4");
    }, 170);
    setTimeout(() => {
      dice.classList.remove("dice4");
      dice.classList.add("dice5");
    }, 340);
    setTimeout(() => {
      dice.classList.remove("dice5");
      dice.classList.add("dice1");
    }, 410);
    setTimeout(() => {
      dice.classList.remove("dice1");
      dice.classList.add("dice3");
    }, 580);
    setTimeout(() => {
      dice.classList.remove("dice3");
      dice.classList.add("dice2");
    }, 750);
    setTimeout(() => {
      dice.classList.remove("dice2");
      dice.classList.add("dice6");
    }, 920);
    setTimeout(() => {
      dice.classList.remove("dice6");
      dice.classList.add("dice5");
    }, 1090);
    setTimeout(() => {
      dice.classList.remove("dice5");
      dice.classList.add("dice1");
    }, 1280);
    setTimeout(() => {
      let num = 0;
      num = Math.ceil(Math.random() * 6);
      if (num == 1) {
        dice.classList.remove("dice2", "dice3", "dice4", "dice5", "dice6");
        dice.classList.add("dice1");
      } else if (num == 2) {
        dice.classList.remove("dice1", "dice3", "dice4", "dice5", "dice6");
        dice.classList.add("dice2");
      } else if (num == 3) {
        dice.classList.remove("dice2", "dice1", "dice4", "dice5", "dice6");
        dice.classList.add("dice3");
      } else if (num == 4) {
        dice.classList.remove("dice2", "dice3", "dice1", "dice5", "dice6");
        dice.classList.add("dice4");
      } else if (num == 5) {
        dice.classList.remove("dice2", "dice3", "dice4", "dice1", "dice6");
        dice.classList.add("dice5");
      } else {
        dice.classList.remove("dice2", "dice3", "dice4", "dice5", "dice1");
        dice.classList.add("dice6");
      }
      totals.push(num);
      const reducer = (previousValue, currentValue) =>
        previousValue + currentValue;

      accumulate.textContent = totals.reduce(reducer);

      if (num == 1 && totals.reduce(reducer) < 20) {
        button.disabled = true;
        restart.disabled = false;
        setTimeout(() => {
          alert("You Lose!!");
        }, 500);
        totals.splice(0, 10);
      } else if (totals.reduce(reducer) >= 20) {
        button.disabled = true;
        restart.disabled = false;
        setTimeout(() => {
          alert("You Win!!");
        }, 500);
        totals.splice(0, 10);
        restart.textContent = "Play Again";
      }
    }, 1450);
  });
}

restart.addEventListener("click", () => {
  reset = true;
  button.disabled = false;
  num = 0;
  accumulate.textContent = num;
});
