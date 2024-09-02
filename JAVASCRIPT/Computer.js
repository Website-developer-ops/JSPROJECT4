
const myGuess = document.querySelector("#user input");
const submitBtn = document.querySelector("#user button");
const myText = document.getElementById("myP");

function computerGuess(){
    const myGuess = Math.floor(Math.random() * 100 + 1);
    return myGuess;
}

let guess = computerGuess();
let num = 0;

function userGuess(){
    const prediction = Number(myGuess.value);
    let message;
    if(num < 10){
        if(prediction < guess){
            message = "Too Low";
        }
        else if(prediction > guess){
            message = "Too high";
        }
        else if(prediction === guess){
            message = "Correct Guess";
            guess = computerGuess();
            console.log(`Attempted ${num} times`);
            num = 0;

        }
        else{
            message = "Network error 404 NOT Found";
        }
        num ++;
        myText.textContent = `${myGuess.value} : ${message}`;
    }
    else if(num >= 10){
        myText.textContent = `You have tried ${num} times`;
        console.log(`Correct answer is ${guess}`);
        num = 0;
        guess = computerGuess();
    }
    else{
        myText.textContent = "Network error 404 NOT Found";
    }        
}
