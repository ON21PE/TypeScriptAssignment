import { start } from "./index";
export let startButton = document.getElementById("startButton");
startButton?.addEventListener("click", function () {
  start();
});

let resetButton = document.getElementById("resetButton");
resetButton?.addEventListener("click", function () {
  location.reload();
});
