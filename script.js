// Get elements
const allFailds = document.getElementsByClassName("faild");
const f1 = document.getElementsByClassName("faild 1")[0];
const f2 = document.getElementsByClassName("faild 2")[0];
const f3 = document.getElementsByClassName("faild 3")[0];
const f4 = document.getElementsByClassName("faild 4")[0];
const f5 = document.getElementsByClassName("faild 5")[0];
const f6 = document.getElementsByClassName("faild 6")[0];
const f7 = document.getElementsByClassName("faild 7")[0];
const f8 = document.getElementsByClassName("faild 8")[0];
const f9 = document.getElementsByClassName("faild 9")[0];

const stopPlaying = document.querySelector(".stopPlaying");

const turns = document.querySelector(".turns");

const restartBtn = document.querySelector(".restartBtn");

let turn = "X";

// Click and add letter to element and the odds
for (let i = 0; i < allFailds.length; i++) {
  allFailds[i].addEventListener("click", (e) => {
    if (e.target.textContent.length === 1) {
      turns.innerHTML = `Already Used`;
    } else if (e.target.textContent.length === 0) {
      e.target.textContent = turn;
      // Change turn
      if (turn === "X") {
        turn = "O";
      } else {
        turn = "X";
      }
      turns.innerHTML = `${turn}'s Turn`;
    }
    // The odds
    // Prospect one 
    if (f3.textContent === "X" && f6.textContent === "X" && f9.textContent === "X") {
      turns.innerHTML = `X's Win!`;
      stopPlaying.style.zIndex = "1";
    } else if (f3.textContent === "O" && f6.textContent === "O" && f9.textContent === "O") {
      turns.innerHTML = `O's Win!`;
      stopPlaying.style.zIndex = "1";
    }
    // Prospect two
    if (f2.textContent === "X" && f5.textContent === "X" && f8.textContent === "X") {
      turns.innerHTML = `X's Win!`;
      stopPlaying.style.zIndex = "1";
    } else if (f2.textContent === "O" && f5.textContent === "O" && f8.textContent === "O") {
      turns.innerHTML = `O's Win!`;
      stopPlaying.style.zIndex = "1";
    }
    // Prospect three
    if (f1.textContent === "X" && f4.textContent === "X" && f7.textContent === "X") {
      turns.innerHTML = `X's Win!`;
      stopPlaying.style.zIndex = "1";
    } else if (f1.textContent === "O" && f4.textContent === "O" && f7.textContent === "O") {
      turns.innerHTML = `O's Win!`;
      stopPlaying.style.zIndex = "1";
    }
    // Prospect four
    if (f1.textContent === "X" && f2.textContent === "X" && f3.textContent === "X") {
      turns.innerHTML = `X's Win!`;
      stopPlaying.style.zIndex = "1";
    } else if (f1.textContent === "O" && f2.textContent === "O" && f3.textContent === "O") {
      turns.innerHTML = `O's Win!`;
      stopPlaying.style.zIndex = "1";
    }
    // Prospect five
    if (f4.textContent === "X" && f5.textContent === "X" && f6.textContent === "X") {
      turns.innerHTML = `X's Win!`;
      stopPlaying.style.zIndex = "1";
    } else if (f4.textContent === "O" && f5.textContent === "O" && f6.textContent === "O") {
      turns.innerHTML = `O's Win!`;
      stopPlaying.style.zIndex = "1";
    }
    // Prospect six
    if (f7.textContent === "X" && f8.textContent === "X" && f9.textContent === "X") {
      turns.innerHTML = `X's Win!`;
      stopPlaying.style.zIndex = "1";
    } else if (f7.textContent === "O" && f8.textContent === "O" && f9.textContent === "O") {
      turns.innerHTML = `O's Win!`;
      stopPlaying.style.zIndex = "1";
    }
    // Prospect seven
    if (f3.textContent === "X" && f5.textContent === "X" && f7.textContent === "X") {
      turns.innerHTML = `X's Win!`;
      stopPlaying.style.zIndex = "1";
    } else if (f3.textContent === "O" && f5.textContent === "O" && f7.textContent === "O") {
      turns.innerHTML = `O's Win!`;
      stopPlaying.style.zIndex = "1";
    }
    // Prospect eight
    if (f1.textContent === "X" && f5.textContent === "X" && f9.textContent === "X") {
      turns.innerHTML = `X's Win!`;
      stopPlaying.style.zIndex = "1";
    } else if (f1.textContent === "O" && f5.textContent === "O" && f9.textContent === "O") {
      turns.innerHTML = `O's Win!`;
      stopPlaying.style.zIndex = "1";
    }
    // equal
    if (f1.textContent.length === 1 && f2.textContent.length === 1 && f3.textContent.length === 1 && f4.textContent.length === 1 && f5.textContent.length === 1 && f6.textContent.length === 1 && f7.textContent.length === 1 && f8.textContent.length === 1 && f9.textContent.length === 1) {
      turns.innerHTML = `equal`;
      stopPlaying.style.zIndex = "1";
    }
  });
}

restartBtn.addEventListener("click", (_) => {
  location.reload();
})