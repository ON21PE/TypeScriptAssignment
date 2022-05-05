import { skipPartiallyEmittedExpressions } from "../node_modules/typescript/lib/typescript";

let zusammengerechnet: number;
let timeUp: boolean = false;
const round = <HTMLInputElement>document.getElementById("rounds");
const time = <HTMLInputElement>document.getElementById("time");
const break_time = <HTMLInputElement>document.getElementById("break_time");
const div = <HTMLDivElement>document.getElementById("test");

const body = document.body;
const counter = document.createElement("div");
const roundDisplay = document.createElement("div");
counter.classList.add("countdown");
roundDisplay.classList.add("rounddisplay");
counter.innerText = "Bitte Zeit ausfüllen";
body.append(counter);
body.append(roundDisplay);

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
}

// Startet Counter
let button = document.getElementById("startButton");
console.log(button);
button?.addEventListener("click", function () {
  start();
});

// Countdown
function startTimer(zeit: any) {
  timeUp = false;
  console.log(zeit);
  counter.innerText = secondsToHms(zeit);

  window.setTimeout(function () {
    countdown(zeit);
    console.log(zeit);
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
    console.log("timeUp= true");
  }
}
function Sleep(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function secondsToHms(d: any) {
  d = Number(d);

  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  return (
    ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2) + ":" + ("0" + s).slice(-2)
  );
}
