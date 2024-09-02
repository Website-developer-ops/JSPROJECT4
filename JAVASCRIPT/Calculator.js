
let display = document.querySelector("#calculator input");

function appendDisplay(number){
    if(display.value === "Result"){
        display.value = "";
        display.value += (number);
    }
    else if(display.value === "Math Error !"){
        display.value = "";
        display.value += (number);    
    }
    else if(display.value === "Infinity"){
        display.value = "";
        display.value += (number); 
    }
    else{
        display.value += (number);
    }
    
}
function clearDisplay(){
    display.value = "";
}
function showResult(){

    display.value = String(display.value).replace("%", "/100");

    try{
        const result = eval(...(display.value));
        display.value = result;
    }
    catch(error){
        console.error(error);
        display.value = "Math Error !";
    }

}
