let zusammengerechnet: number;
const round = <HTMLInputElement>document.getElementById("rounds");
const time = <HTMLInputElement>document.getElementById("time");
const break_time = <HTMLInputElement>document.getElementById("break_time");
const div = <HTMLDivElement>document.getElementById("test");

const body = document.body;
const counter = document.createElement("div");
counter.innerText = "Bitte Zeit ausfüllen";
body.append(counter);

round.addEventListener("change", test);
time.addEventListener("change", test);
break_time.addEventListener("change", test);

function test() {
  console.log(round.value);
  console.log(break_time.value);
  console.log(time.value);
  let alles: any =
    parseInt(round.value) * (parseInt(time.value) + parseInt(break_time.value));
  zusammengerechnet = alles;
  console.log(alles);
}

let button = document.getElementById("startButton");
console.log(button);
button?.addEventListener("click", function () {
  startTimer(zusammengerechnet);
});

function startTimer(zeit: any) {
  console.log(zeit);
  counter.innerText = zeit;

  window.setTimeout(function () {
    countdown(zeit);
  }, 1000);
}
function countdown(zeit: any) {
  zeit--;
  counter.innerText = zeit;
  if (zeit != 0) {
    window.setTimeout(function () {
      countdown(zeit);
    }, 1000);
  }
}
