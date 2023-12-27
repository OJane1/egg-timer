const btnOne = document.querySelector("#btnOne");
btnOne.addEventListener("click", startTimer("one", 3));

const btnTwo = document.querySelector("#btnTwo");
btnTwo.addEventListener("click", startTimer("two", 5));

const btnThree = document.querySelector("#btnThree");
btnThree.addEventListener("click", startTimer("three", 7));

const btnFour = document.querySelector("#btnFour");
btnFour.addEventListener("click", startTimer("four", 4));

const btnFive = document.querySelector("#btnFive");
btnFive.addEventListener("click", startTimer("five", 6));

const btnSix = document.querySelector("#btnSix");
btnSix.addEventListener("click", startTimer("six", 8));

function startTimer(timerElementId, timeInMinutes) {
    let amountTime = timeInMinutes * 60;
    let timerID;
    
    const countdown = document.querySelector(`#${timerElementId}`);

    function calculateTime() {
        let minutes = Math.floor(amountTime / 60);
        let seconds = amountTime % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        
        countdown.textContent = `${minutes}:${seconds}`;
        amountTime--;

        if (amountTime < 0) {
            stopTimer();
            amountTime = 0;
        }
    }

    function startCountdown() {
        clearInterval(timerID);
        timerID = setInterval(calculateTime, 1000);
    }

    function stopTimer() {
        clearInterval(timerID);
        alarm();
    }

    function alarm() {
        countdown.textContent = "READY !";
        document.querySelector("#alarmSound").play();
    }

    return startCountdown;
}


