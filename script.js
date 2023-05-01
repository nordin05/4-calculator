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

function changeDisplay(value){
    document.querySelector('.screen').textContent = value;
}


let firstNumber;
let secondNumber;
let operation;
let displayValue = "";

document.querySelectorAll('button').forEach(btn =>{
    btn.addEventListener('click', () =>{
        calculator(btn.textContent);
    });
  });

  function calculator(buttonPressed){
    displayValue = displayValue + buttonPressed;
    changeDisplay(displayValue);

    if (buttonPressed == "+" || buttonPressed == "-" || buttonPressed == "*" || buttonPressed == "/"){
        operation = buttonPressed;
        firstNumber = displayValue.replace(buttonPressed,'');
        //displayValue = "";
        //changeDisplay(displayValue);
    }

    else if (buttonPressed == "=" && firstNumber != null && operation != null){
        secondNumber = displayValue.replace("=",'');
        secondNumber = secondNumber.replace(operation,'');
        secondNumber = secondNumber.replace(firstNumber,'');
        displayValue = operate(operation, parseInt(firstNumber), parseInt(secondNumber));
        changeDisplay(displayValue);
    }

    else if (buttonPressed == "Clear"){
        firstNumber = null;
        secondNumber = null;
        operation = null;
        displayValue = "";
        changeDisplay(displayValue);
    }
    console.log(`firstNumber: ${firstNumber} 
operation: ${operation} 
secondNumber: ${secondNumber}
displayValue: ${displayValue}`);
  }
