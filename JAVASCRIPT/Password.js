
const myinputs = document.querySelectorAll("#myinputs input");
const myTexts = document.querySelectorAll("#myTexts p");

let balance = 0;

function handleDeposit(){
    const deposit = Number(myinputs[0].value);
    balance += deposit;
    myTexts[0].textContent = `KSH ${fixingNums(balance)}`;

    myinputs.forEach(element => hideElements(element));

}

function handlePlay(){
    const guess = randomNumber();
    const myGuess = Number(myinputs[1].value);
    const playAmount = Number(myinputs[2].value);
    balance -= playAmount;

    if(guess === myGuess){
        const win = playAmount * 1000 ;
        balance += win;
        myTexts[1].textContent = `WON KSH ${fixingNums(win)}`;
        myTexts[1].style.color = "blue";
    }
    else if(guess !== myGuess){
        myTexts[1].textContent = `Lost KSH ${fixingNums(playAmount)}`;
        myTexts[1].style.color = "red";
    }
    handleDeposit();
}

function randomNumber(){
    return Math.floor(Math.random() * 6 + 1);
}
function fixingNums(number){
    return number.toFixed(2);
}
function hideElements(element){
    element.value = "";
}

const myPassword1 = "Kh)1Iu^9Tr^9Aw*1";

function generatePassword(){
    let myPassword = "";
    const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const small = "abcdefghijklmnopqrstuvwxwz";
    const special = "!@#$%^&*()";
    const nums = "0123456789";

    for(let i = 0; i<4; i++){
        myPassword += smallCapital(capital);
        myPassword += smallCapital(small);
        myPassword += specialNums(special);
        myPassword += specialNums(nums);
    }

    myTexts[2].textContent = `${myPassword}`;

    if(myPassword === myPassword1){
        window.alert("Your Password has been cracked");
        myTexts[2].style.color = "red";
    }
    else{
        console.log(myPassword.length);
    }

}

function smallCapital(letters){
    const myIndex = Math.floor(Math.random() * 26);
    return letters.charAt(myIndex);
}
function specialNums(numbers){
    const myIndex = Math.floor(Math.random() * 10);
    return numbers.charAt(myIndex);
}


