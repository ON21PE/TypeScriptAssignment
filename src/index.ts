import { counter, roundDisplay, round, time, break_time } from "./myModule";
import { secondsToHms } from "./myOtherModule";
let timeUp: boolean = false;
counter.innerText = "Bitte Zeit ausfüllen";
round.addEventListener("change", test);
time.addEventListener("change", test);
break_time.addEventListener("change", test);
function test() {
  console.log(round, time, break_time);
}
async function start() {
  let pauseActive = false;
  let timerStarted = false;
  let pausen = parseInt(break_time.value);
  let zeit = parseInt(time.value);
  let runden = parseInt(round.value);

  while (runden > 0) {
    if (!timerStarted) {
      startTimer(zeit);
      timerStarted = true;
      roundDisplay.innerText = "Runde" + " " + runden;
    }
    if (!timeUp) {
      await Sleep(200);
    }
    if (timeUp) {
      if (!pauseActive) {
        startTimer(pausen);
        pauseActive = true;
        timerStarted = true;
        roundDisplay.innerText = "Pause" + " " + runden;
      } else {
        pauseActive = false;
        timerStarted = false;
        runden--;
      }
    }
  }
  counter.innerText = "Bitte Zeit ausfüllen";
}

// Startet Counter
let button = document.getElementById("startButton");
button?.addEventListener("click", function () {
  start();
});

// Countdown
function startTimer(zeit: any) {
  timeUp = false;
  counter.innerText = secondsToHms(zeit);

  window.setTimeout(function () {
    countdown(zeit);
  }, 1000);
}
function countdown(zeit: any) {
  zeit--;
  counter.innerText = secondsToHms(zeit);
  if (zeit != 0) {
    window.setTimeout(function () {
      countdown(zeit);
    }, 1000);
  } else {
    timeUp = true;
  }
}
function Sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
