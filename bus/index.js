const black = document.querySelector("#black");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");

const intervalArr = [];

const off = () => {
  red.style.backgroundColor = "white";
  yellow.style.backgroundColor = "white";
  green.style.backgroundColor = "white";
  const intervalId = setInterval(on, 2000);
  intervalArr.push(intervalId);
  for (let i = 0; i < intervalArr; i++) {
    clearInterval(intervalArr[i]);
  }
};

const on = () => {
  red.style.backgroundColor = "red";
  yellow.style.backgroundColor = "yellow";
  green.style.backgroundColor = "green";
};

setInterval(off, 2000);
// black.addEventListener("click", () => {
//   setInterval(off, 1000);
// });
