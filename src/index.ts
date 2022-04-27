
const rounds = <HTMLInputElement>document.getElementById("rounds");
const time = <HTMLInputElement>document.getElementById("time");
const break_time = <HTMLInputElement>document.getElementById("break_time");
const div = <HTMLDivElement>document.getElementById("test");

rounds.addEventListener("change", test);
time.addEventListener("change", test);
break_time.addEventListener("change", test);

function test() {
  console.log(rounds.value);
  console.log(break_time.value);
  console.log(time.value);
};

let button = document.getElementById("startButton");
console.log(button);
button?.addEventListener("click", function () {
  startTimer(6);
});

function startTimer(zeit: any) {
  console.log(zeit);

  window.setTimeout(function () {
    countdown(zeit);
  }, 1000);
}
function countdown(zeit: any) {
  zeit--;
  console.log(zeit);
  if (zeit != 0) {
    window.setTimeout(function () {
      countdown(zeit);
    }, 1000);
  }
}

// function zusammenrechnen(){
//  let alles:number = rounds * (time + break_time)
// }
