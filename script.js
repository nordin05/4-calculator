function add(a, b){ 
    return a + b;
}

function subtract(a, b){ 
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operation, firstNumber, secondNumber){
    switch(operation){
        case "+": return add(firstNumber, secondNumber);
        case "-": return subtract(firstNumber, secondNumber);
        case "*": return multiply(firstNumber, secondNumber);
        case "/": return divide(firstNumber, secondNumber);  
    }
}

let firstNumber;
let secondNumber;
let operation;

