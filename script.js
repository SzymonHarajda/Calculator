const btn = document.querySelectorAll("button");
const output = document.querySelector(".display");
let operator = '';
let firstArg = '';
let secondArg = '';


function add(a,b){
  return parseFloat(a)+parseFloat(b);
}
function sub(a,b){
  return parseFloat(a)-parseFloat(b);
}
function multi(a,b){
  return parseFloat(a)*parseFloat(b);
}
function divide(a, b){
  if (parseFloat(b) == 0){
      return "can't quite answer this one cheif";
  }
  else{
      return parseFloat(a) / parseFloat(b);
  }
}

function operate(opr,num1,num2){
  switch(opr){
    case "+":
      return add(num1,num2);
      break;
    case "-":
      return sub(num1,num2);
      break;
    case "*":
      return multi(num1,num2);
      break;
    case "/":
      return divide(num1,num2);
      break;
    
  }
}

function boundsCheck(){
  if (output.textContent.includes("Infinity") || output.textContent.includes("nan")){
      output.textContent = "You have exceeded the realms of my knowledge...";
  }
}

function firstArg(input){
  if (input == '.' && firstArg.includes('.')){
    return;
}
if (input == '+/-' && output.textContent == ''){
    return;
}
if (input == '+/-'){
    firstArg = -(parseFloat(firstArg));
    firstArg = firstArg.toString();
    output.textContent = firstArg;
    return;
}
if (input == 'delete'){
    firstArg = firstArg.split('');
    firstArg.pop();
    firstArg = firstArg.join('');
    output.textContent = firstArg;
    return;
}
secArg += input;
output.textContent += input;
boundsCheck();
}

function secArg(input){
  if (input == '.' && secArg.includes('.')){
    return;
}
if (input == '+/-' && output.textContent == ''){
    return;
}
if (input == '+/-'){
    secArg = -(parseFloat(secArg));
    secArg = secArg.toString();
    output.textContent = secArg;
    return;
}
if (input == 'delete'){
    secArg = secArg.split('');
    secArg.pop();
    secArg = secArg.join('');
    output.textContent = secArg;
    return;
}
secArg += input;
output.textContent += input;
boundsCheck();
}
function clearAll(){
  output.textContent = '';
  firstArg= '';
  operator='';
  secondArg='';
}