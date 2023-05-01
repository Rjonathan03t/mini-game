const readyButton = document.getElementById('ReadyButton');
const button = document.getElementById('button');
const ready = document.getElementById('ready');
const time = document.getElementById('time');
const score = document.getElementById('score');
const target = document.getElementById('target');
const target1 = document.getElementById("target1");
const target2 = document.getElementById("target2");
const target3 = document.getElementById("target3");
const target4 = document.getElementById("target4");
const target5 = document.getElementById("target5");
const target6 = document.getElementById("target6");
const target7 = document.getElementById("target7");
const target8 = document.getElementById("target8");
const target9 = document.getElementById("target9");
const target10 = document.getElementById("target10");
const target11 = document.getElementById("target11");
const target12 = document.getElementById("target12");
const target13 = document.getElementById("target13");
const target14 = document.getElementById("target14");
const target15 = document.getElementById("target15");
const target16 = document.getElementById("target16");

let countDownButton = 4
let countDown = 4
let yourScore = 0


readyButton.addEventListener("click", function playIt() {
    readyButton.disabled = true;
    let count = setInterval(() => {
        countDownButton--;
        ready.innerHTML = countDownButton
        if (countDownButton == 0) {
            readyButton.classList.add('playing');
            ready.innerHTML = "Get better score!";
            let go = document.createElement('h1');
            go.innerHTML = "Goo!";
            button.appendChild(go);


            let timer = setInterval(() => {
                countDown--;
                let shotIt = setInterval(() => {
                    target1.classList.add("targetFound");
                    
                     target1.addEventListener("click", function () {
                        target1.classList.remove("targetFound")
                        yourScore++
                        score.innerHTML = "Score : "+yourScore;
                        target2.classList.add("targetFound");
                        target1.disabled = true;
                    })
                    target2.disabled = false;
                    target2.addEventListener("click" , function(){
                        target2.disabled = true;
                        target2.classList.remove("targetFound");
                        yourScore++
                        score.innerHTML = "Score : "+yourScore;  
                        target1.classList.add("targetFound");
                    })
                    if (countDown == 0) {
                        clearInterval(shotIt);
                    }
                }, 1000)
                time.innerHTML = "Timer : " + countDown + "s";
                if (countDown == 0) {
                    go.classList.add('playing');
                    let recommencer = document.createElement('button');
                    recommencer.innerHTML = "<h1>Recommencer</h1>";
                    recommencer.style.padding = "1.5% 3% 1.5%";
                    recommencer.style.marginTop = "7%";
                    recommencer.style.backgroundColor = "rgb(0, 22, 70)";
                    recommencer.style.color = "white";
                    recommencer.style.borderRadius = "15px";
                    recommencer.style.border = "none";
                    recommencer.style.transition = ".3s";
                    recommencer.addEventListener("mouseenter", () => {
                        recommencer.style.backgroundColor = "rgb(5, 66, 197)";
                        recommencer.style.color = "white";
                    })
                    recommencer.addEventListener("mouseleave", () => {
                        recommencer.style.backgroundColor = "rgb(0, 22, 70)";
                        recommencer.style.color = "white";
                    })
                    button.appendChild(recommencer);
                    readyButton.disabled = false;
                    recommencer.addEventListener("click", () => {
                        countDownButton = 4;
                        countDown = 4;
                        readyButton.classList.add("replay");
                        recommencer.classList.add("playing");
                        time.innerHTML = "Timer : 60s";
                        ready.innerHTML = "Replay";
                    })
                    readyButton.classList.remove("replay");
                    clearInterval(timer);
                }
            }, 1000);
            clearInterval(count);
        }
    }, 1000);
})


