/* Created by Tivotal */

let container = document.querySelector(".container");
let progress = document.querySelector(".progress");

let initVal = 0;

//incrementing initVal for every 100ms

let increment = setInterval(() => {
  initVal++;

  //displaying initVal into progress text
  progress.textContent = `${initVal}%`;

  //if initVal is equal to 100 stopping the process
  if (initVal === 100) {
    clearInterval(increment);

    //removing active class from container
    container.classList.remove("active");
  }
}, 100);
