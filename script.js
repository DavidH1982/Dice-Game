const button = document.getElementById("button");
const restart = document.getElementById("restart");
const accumulate = document.getElementById("accumulate");
let totals = [];
const dice = document.getElementById("dice");
const enterButton = document.getElementById("player1EnterButton");
const play2Button = document.getElementById("player2EnterButton");
const welcome = document.getElementById("welcomePage");
const play1screen = document.getElementById("player1screen");
const play2screen = document.getElementById("player2screen");
const play2Enter = document.getElementById("enterButton");
const play2Intro = document.getElementById("play2intro");
const splitScreen = document.getElementById("splitScreen");
const player1Dice = document.getElementById("player1dice");
const player1Accumulate = document.getElementById("player1accumulate");
const player1Button = document.getElementById("player1button");
const player1Hold = document.getElementById("player1hold");
let player1Totals = [];
const player2Button = document.getElementById("player2button");
const player2Hold = document.getElementById("player2hold");
const playAgain = document.getElementById("playAgainContainer");
const yesButton = document.getElementById("yes");

enterButton.addEventListener("click", () => {
  welcome.style.display = "none";
  play2screen.style.display = "none";
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
play2Button.addEventListener("click", () => {
  welcome.style.display = "none";
  play1screen.style.display = "none";
  play2Intro.style.display = "inline";
});
play2Enter.addEventListener("click", () => {
  play2Intro.style.display = "none";
  splitScreen.style.display = "flex";
  setTimeout(() => {
    play2screen.style.filter = "blur(7px)";
  }, 300);
  setTimeout(() => {
    play2screen.style.filter = "blur(3px";
  }, 600);
  setTimeout(() => {
    play2screen.style.filter = "blur(0px)";
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

// Split screen player 1

player1Button.addEventListener("click", () => {
  player2Button.disabled = true;
  player2Hold.disabled = true;
  player1Dice.classList.add("dice6");
  setTimeout(() => {
    player1Dice.classList.remove("dice6");
    player1Dice.classList.add("dice4");
  }, 170);
  setTimeout(() => {
    player1Dice.classList.remove("dice4");
    player1Dice.classList.add("dice5");
  }, 340);
  setTimeout(() => {
    player1Dice.classList.remove("dice5");
    player1Dice.classList.add("dice1");
  }, 410);
  setTimeout(() => {
    player1Dice.classList.remove("dice1");
    player1Dice.classList.add("dice3");
  }, 580);
  setTimeout(() => {
    player1Dice.classList.remove("dice3");
    player1Dice.classList.add("dice2");
  }, 750);
  setTimeout(() => {
    player1Dice.classList.remove("dice2");
    player1Dice.classList.add("dice6");
  }, 920);
  setTimeout(() => {
    player1Dice.classList.remove("dice6");
    dice.classList.add("dice5");
  }, 1090);
  setTimeout(() => {
    player1Dice.classList.remove("dice5");
    player1Dice.classList.add("dice1");
  }, 1280);
  setTimeout(() => {
    let player1num = 0;
    player1num = Math.ceil(Math.random() * 6);
    if (player1num == 1) {
      player1Dice.classList.remove("dice2", "dice3", "dice4", "dice5", "dice6");
      player1Dice.classList.add("dice1");
    } else if (player1num == 2) {
      player1Dice.classList.remove("dice1", "dice3", "dice4", "dice5", "dice6");
      player1Dice.classList.add("dice2");
    } else if (player1num == 3) {
      player1Dice.classList.remove("dice2", "dice1", "dice4", "dice5", "dice6");
      player1Dice.classList.add("dice3");
    } else if (player1num == 4) {
      player1Dice.classList.remove("dice2", "dice3", "dice1", "dice5", "dice6");
      player1Dice.classList.add("dice4");
    } else if (player1num == 5) {
      player1Dice.classList.remove("dice2", "dice3", "dice4", "dice1", "dice6");
      player1Dice.classList.add("dice5");
    } else {
      player1Dice.classList.remove("dice2", "dice3", "dice4", "dice5", "dice1");
      player1Dice.classList.add("dice6");
    }
    player1Totals.push(player1num);
    const player1reducer = (previousValue, currentValue) =>
      previousValue + currentValue;

    player1Accumulate.textContent = player1Totals.reduce(player1reducer);

    if (player1num == 1 && player1Totals.reduce(player1reducer) < 20) {
      player1Button.disabled = true;
      player1Hold.disabled = true;
      player2Button.disabled = true;
      player2Hold.disabled = true;
      setTimeout(() => {
        alert("Player 1 Loses!!");
      }, 500);
      player1Totals.splice(0, 10);
      player2Totals.splice(0, 10);
      setTimeout(() => {
        play2screen.style.filter = "blur(3px)";
      }, 300);
      setTimeout(() => {
        play2screen.style.filter = "blur(7px";
      }, 600);
      setTimeout(() => {
        play2screen.style.filter = "blur(10px)";
      }, 900);
      setTimeout(() => {
        playAgain.style.display = "flex";
      }, 900);
    } else if (player1Totals.reduce(player1reducer) >= 20) {
      player1Button.disabled = true;
      player1Hold.disabled = true;
      player2Button.disabled = true;
      player2Hold.disabled = true;
      setTimeout(() => {
        alert("Player 1 is the Winner!!");
      }, 500);
      player1Totals.splice(0, 10);
      player2Totals.splice(0, 10);
      setTimeout(() => {
        play2screen.style.filter = "blur(3px)";
      }, 300);
      setTimeout(() => {
        play2screen.style.filter = "blur(7px";
      }, 600);
      setTimeout(() => {
        play2screen.style.filter = "blur(10px)";
      }, 900);
      setTimeout(() => {
        playAgain.style.display = "flex";
      }, 900);
    }
  }, 1450);
  yesButton.addEventListener("click", () => {
    playAgain.style.display = "none";
    player2Dice.classList.remove(
      "dice1",
      "dice2",
      "dice3",
      "dice4",
      "dice5",
      "dice6"
    );
    player1Dice.classList.remove(
      "dice1",
      "dice2",
      "dice3",
      "dice4",
      "dice5",
      "dice6"
    );
    player1Accumulate.textContent = 0;
    player2Accumulate.textContent = 0;
    player1Button.disabled = false;
    player1Hold.disabled = false;
    player2Button.disabled = false;
    player2Hold.disabled = false;
    setTimeout(() => {
      play2screen.style.filter = "blur(7px)";
    }, 300);
    setTimeout(() => {
      play2screen.style.filter = "blur(3px";
    }, 600);
    setTimeout(() => {
      play2screen.style.filter = "blur(0px)";
    }, 900);
  });
});

player1Hold.addEventListener("click", () => {
  player1Button.disabled = true;
  player2Button.disabled = false;
  player2Hold.disabled = false;
});

// Split screen player 2

const player2Dice = document.getElementById("player2dice");
const player2Accumulate = document.getElementById("player2accumulate");
let player2Totals = [];

player2Button.addEventListener("click", () => {
  player1Button.disabled = true;
  player1Hold.disabled = true;
  player2Dice.classList.add("dice6");
  setTimeout(() => {
    player2Dice.classList.remove("dice6");
    player2Dice.classList.add("dice4");
  }, 170);
  setTimeout(() => {
    player2Dice.classList.remove("dice4");
    player2Dice.classList.add("dice5");
  }, 340);
  setTimeout(() => {
    player2Dice.classList.remove("dice5");
    player2Dice.classList.add("dice1");
  }, 410);
  setTimeout(() => {
    player2Dice.classList.remove("dice1");
    player2Dice.classList.add("dice3");
  }, 580);
  setTimeout(() => {
    player2Dice.classList.remove("dice3");
    player2Dice.classList.add("dice2");
  }, 750);
  setTimeout(() => {
    player2Dice.classList.remove("dice2");
    player2Dice.classList.add("dice6");
  }, 920);
  setTimeout(() => {
    player2Dice.classList.remove("dice6");
    dice.classList.add("dice5");
  }, 1090);
  setTimeout(() => {
    player2Dice.classList.remove("dice5");
    player2Dice.classList.add("dice1");
  }, 1280);
  setTimeout(() => {
    let player2num = 0;
    player2num = Math.ceil(Math.random() * 6);
    if (player2num == 1) {
      player2Dice.classList.remove("dice2", "dice3", "dice4", "dice5", "dice6");
      player2Dice.classList.add("dice1");
    } else if (player2num == 2) {
      player2Dice.classList.remove("dice1", "dice3", "dice4", "dice5", "dice6");
      player2Dice.classList.add("dice2");
    } else if (player2num == 3) {
      player2Dice.classList.remove("dice2", "dice1", "dice4", "dice5", "dice6");
      player2Dice.classList.add("dice3");
    } else if (player2num == 4) {
      player2Dice.classList.remove("dice2", "dice3", "dice1", "dice5", "dice6");
      player2Dice.classList.add("dice4");
    } else if (player2num == 5) {
      player2Dice.classList.remove("dice2", "dice3", "dice4", "dice1", "dice6");
      player2Dice.classList.add("dice5");
    } else {
      player2Dice.classList.remove("dice2", "dice3", "dice4", "dice5", "dice1");
      player2Dice.classList.add("dice6");
    }
    player2Totals.push(player2num);
    const player2reducer = (previousValue, currentValue) =>
      previousValue + currentValue;

    player2Accumulate.textContent = player2Totals.reduce(player2reducer);

    if (player2num == 1 && player2Totals.reduce(player2reducer) < 20) {
      player1Button.disabled = true;
      player1Hold.disabled = true;
      player2Button.disabled = true;
      player2Hold.disabled = true;
      setTimeout(() => {
        alert("Player 2 Loses!!");
      }, 500);
      player1Totals.splice(0, 10);
      player2Totals.splice(0, 10);
      setTimeout(() => {
        play2screen.style.filter = "blur(3px)";
      }, 300);
      setTimeout(() => {
        play2screen.style.filter = "blur(7px";
      }, 600);
      setTimeout(() => {
        play2screen.style.filter = "blur(10px)";
      }, 900);
      setTimeout(() => {
        playAgain.style.display = "flex";
      }, 900);
    } else if (player2Totals.reduce(player2reducer) >= 20) {
      player1Button.disabled = true;
      player1Hold.disabled = true;
      player2Button.disabled = true;
      player2Hold.disabled = true;
      setTimeout(() => {
        alert("Player 2 is the Winner!!");
      }, 500);
      player1Totals.splice(0, 10);
      player2Totals.splice(0, 10);
      setTimeout(() => {
        play2screen.style.filter = "blur(3px)";
      }, 300);
      setTimeout(() => {
        play2screen.style.filter = "blur(7px";
      }, 600);
      setTimeout(() => {
        play2screen.style.filter = "blur(10px)";
      }, 900);
      setTimeout(() => {
        playAgain.style.display = "flex";
      }, 900);
    }
  }, 1450);
  yesButton.addEventListener("click", () => {
    playAgain.style.display = "none";
    player2Dice.classList.remove(
      "dice1",
      "dice2",
      "dice3",
      "dice4",
      "dice5",
      "dice6"
    );
    player1Dice.classList.remove(
      "dice1",
      "dice2",
      "dice3",
      "dice4",
      "dice5",
      "dice6"
    );
    player1Accumulate.textContent = 0;
    player2Accumulate.textContent = 0;
    player1Button.disabled = false;
    player1Hold.disabled = false;
    player2Button.disabled = false;
    player2Hold.disabled = false;
    setTimeout(() => {
      play2screen.style.filter = "blur(7px)";
    }, 300);
    setTimeout(() => {
      play2screen.style.filter = "blur(3px";
    }, 600);
    setTimeout(() => {
      play2screen.style.filter = "blur(0px)";
    }, 900);
  });
});

player2Hold.addEventListener("click", () => {
  player2Button.disabled = true;
  player1Button.disabled = false;
  player1Hold.disabled = false;
});
