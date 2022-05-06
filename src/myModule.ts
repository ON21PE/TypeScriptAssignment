export const round = <HTMLInputElement>document.getElementById("rounds");
export const time = <HTMLInputElement>document.getElementById("time");
export const break_time = <HTMLInputElement>document.getElementById("break_time");
export const div = <HTMLDivElement>document.getElementById("test");

export const body = document.body;
export const counter = document.createElement("div");
export const roundDisplay = document.createElement("div");
counter.classList.add("countdown");
roundDisplay.classList.add("rounddisplay");
body.append(counter);
body.append(roundDisplay);