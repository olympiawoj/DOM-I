//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
//Tip: 1000 ms = 1 second.

{
  /* <div class="digits">
<div class="digit" id="secondTens">-</div>
<div class="digit" id="secondOnes">-</div>
<div class="digit" id="colon">:</div>
<div class="digit" id="msHundreds">-</div>
<div class="digit" id="msTens">-</div>
</div> */
}

//Step 1) Grab References to the DOM
const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const msOnes = document.getElementById("msOnes");

timer();

//Step 2: Define function timer() which defines our init(), increment(), endTimer(), and updateTimer() functions

function timer() {
  init();

  //Step 3: init() function initializes everything to 0 and starts a millisecond counter
  function init() {
    let ms = 0;
    secondTens.textContent = "0";
    secondOnes.textContent = "0";
    msHundreds.textContent = "0";
    msTens.textContent = "0";

    //Step 4: timerInterval tracks our milliseconds and every 10 milliseconds, adds 10ms to our count

    //Step 5: setInterval calls a function at specified intervals in ms
    //It will continue calling until clearInterval() is called or window is closed
    //Every 10ms, it will add 10ms to our ms count, it will check if ms ===10000
    //if it is, it will call an endTimer function and pass in the timer
    //if it's not, it will call an updateTimer function and pass in the ms count

    const timerInterval = window.setInterval(() => {
      ms += 10;
      //
      if (ms === 10000) {
        endTimer(timerInterval);
      }
      updateTimer(ms);
    }, 10);
  }

  //
  function endTimer(intervalId) {
    clearInterval(intervalId);
    Array.from(digits.children).forEach(digit => {
      digit.classList.add("redDigit");
    });
  }

  function increment(string) {
    let number = Number(string) + 1;
    return number.toString();
  }

  function updateTimer(ms) {
    if (ms === 10000) {
      secondTens.textContent = "1";
      secondOnes.textContent = "0";
      msHundreds.textContent = "0";
      msTens.textContent = "0";
    } else if (ms % 1000 === 0) {
      secondOnes.textContent = increment(secondOnes.textContent);
      msHundreds.textContent = "0";
      msTens.textContent = "0";
    } else if (ms % 100 === 0) {
      msHundreds.textContent = increment(msHundreds.textContent);
      msTens.textContent = "0";
    } else {
      msTens.textContent = increment(msTens.textContent);
    }
  }
}
