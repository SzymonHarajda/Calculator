function add(number1, number2){
    return number1 + number2;
} 

function subtract(number1, number2){
    return number1 - number2;
}


function multiply(number1, number2){
    return number1 * number2;
}


function divide(number1, number2){
    return number1 / number2;
}

function operate(number1, operator, number2){
    if (operator == "+"){
        return add(number1, number2);
    } else if (operator == "-"){
        return subtract(number1, number2);
    } else if (operator == "*"){
        return multiply(number1, number2);
    } else if (operator == "/"){ 
        return divide(number1, number2);
    }
 }
//VARIABLES
const DEFAULT_VALUE=0;
let displayValue=DEFAULT_VALUE;
let num1=DEFAULT_VALUE;
let num2;
let operation=null;
let resetScreen = false;

//SELECTORS

let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator');
let sign= document.querySelector(".sign")
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');
const equalsBtn = document.querySelector('.equals');
const decimalBtn = document.querySelector('#decimal');


//EVENT LISNERS
window.onload = () => {
    display.innerText = displayValue;
}
sign.addEventListener('click',()=>{
    display.textContent=(-1)*display.textContent;
})
clearBtn.addEventListener('click', ()=> {
    display.innerText = DEFAULT_VALUE;
    num1=DEFAULT_VALUE;
    num2='';
    operation=null;
    displayValue =DEFAULT_VALUE;
})
deleteBtn.addEventListener('click', ()=>{
    display.textContent = display.textContent.toString().slice(0, -1);
})
equalsBtn.addEventListener('click',equal);
decimalBtn.addEventListener('click', addDecimal);

numbers.forEach(button => 
    button.addEventListener('click', () => {
    inputNumber(button.textContent)})
)
operators.forEach(button => 
    button.addEventListener('click', () => {
    inputOperotor(button.textContent)})
)

function updateDisplay(){
    display.textContent = num1;
}
function inputNumber(number){
    if (display.textContent ==="0"){
        display.textContent ='';
}
    else if (display.textContent.length >= 12 && 
        display.textContent !== "Don't be silly")
        return;
    else if (operation!==null && resetScreen){
        display.textContent ='';
        resetScreen=false;
    }
    
    display.textContent +=number; 
    
}
function inputOperotor(operator){
if (operation!==null){
    equal();
}
    num1 = display.textContent;
    operation = operator;
    resetScreen=true;
}

function equal(){
    if(operation ==='/' && display.textContent === "0"){
        display.textContent="Don't be silly";
        num1=DEFAULT_VALUE;
        operation=null;
        num2=0;
        return;
    }
    else if(operation==null)return;
    num2=display.textContent;
    display.textContent=roundNumber(operate(+num1,operation,+num2));
    operation=null;
    resetScreen=true;
    
}

function roundNumber (number) {
    return Math.round(number * 1000) / 1000;
}
function addDecimal(){
    if(display.textContent.includes(".")) {
        return;
    }
    display.textContent += ".";
}
window.onload = () => {
    display.innerText = displayValue;
}