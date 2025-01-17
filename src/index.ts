import { counter, roundDisplay, round, time, break_time } from "./variables";
import { secondsToHms } from "./time-converter";
import { startButton } from "./buttons";


let timeUp: boolean = false;

counter.innerText = "Bitte Zeit ausfüllen";
round.addEventListener("change", test);
time.addEventListener("change", test);
break_time.addEventListener("change", test);
function test() {
  console.log(round, time, break_time);
}
export async function start() {
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
      startButton?.setAttribute("disabled", "true");
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
  roundDisplay.innerText = " ";
  startButton?.removeAttribute("disabled");
}




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

// Quelle: https://www.codegrepper.com/code-examples/typescript/typescript+sleep
function Sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
