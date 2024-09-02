
const deposit = document.querySelector("#deposit input");
const myPlaying = document.getElementById("myBet");
const inputs = document.querySelectorAll("#machines input");
const myBalance = document.getElementById("myBalance");
const myResult = document.getElementById("myResult");
const playBtn = document.querySelector("#machines button");
// const balanceBtn = document.querySelector("#deposit button");

let balance= 0;

function showBalance(){
    balance += Number(deposit.value);
    myBalance.textContent = `KSH ${balance.toFixed(2)}`;
    deposit.value = "";
}

function showResult(){
    let x = 0;
    let message = "";
    const playing = Number(myPlaying.value);
    myPlaying.value = "";
    balance -= playing;
    let win = 0;

    const predictions = [prediction1(), prediction2(), prediction3(), prediction4(), prediction5()];

    inputs.forEach((element, index) => {
        let myelement = Number(element.value);
        element.value = "";
        if(myelement === predictions[index]){
            x ++;
        }
    });

    switch(x){
        case 5:
            win = playing * 100;
            message = `WON: KSH ${win.toFixed(2)}`;
            break;
        case 4:
            win = playing * 80;
            message = `WON: KSH ${win.toFixed(2)}`;
            break;
        case 3:
            win = playing * 60;
            message = `WON KSH ${win.toFixed(2)}`;
            break;
        case 2:
            win = playing * 40;
            message = `WON KSH ${win.toFixed(2)}`;
            break;
        case 1:
            win = playing * 20;
            message = `WON KSH ${win.toFixed(2)}`;
            break;
        default:
            message = `LOST KSH ${playing.toFixed(2)}`;
            break
    }
    balance += win;
    showBalance();
    myResult.textContent = message;

    if(win > 0){
        myResult.style.color = "blue";
    }
    else if(win <= 0){
        myResult.style.color = "red";
    }
}


function prediction1(){
    return Math.floor(Math.random() * 10 + 1);
}
function prediction2(){
    return Math.floor(Math.random() * 10 + 1);
}
function prediction3(){
    return Math.floor(Math.random() * 10 + 1);
}
function prediction4(){
    return Math.floor(Math.random() * 10 + 1);
}
function prediction5(){
    return Math.floor(Math.random() * 10 + 1);
}
