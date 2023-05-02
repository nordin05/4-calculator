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
        case "x": return multiply(firstNumber, secondNumber);
        case "/": if (secondNumber == 0){
                    return "ERROR"};
                  return divide(firstNumber, secondNumber);
    }
}

function changeDisplay(value){
    if (value.length > 12){
        console.log("overflow");
    }
    document.querySelector('.screen').textContent = value;
}

function clearAll(){
    firstNumber = null;
    secondNumber = null;
    operation = null;
    displayValue = "";
    changeDisplay(displayValue);
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
    if (displayValue == "ERROR"){
        clearAll()
    }

    displayValue = displayValue + buttonPressed;
    changeDisplay(displayValue);

    if (buttonPressed == "+" || buttonPressed == "-" || buttonPressed == "x" || buttonPressed == "/"){
        operation = buttonPressed;
        firstNumber = displayValue.slice(0, -1);
        if (firstNumber == ""){
            firstNumber = 0;
        }
    }

    else if (buttonPressed == "=" && firstNumber != undefined && operation != undefined){
        console.log("CALCULARETE");
        secondNumber = displayValue.replace("=",'');
        secondNumber = secondNumber.replace(operation,'');
        secondNumber = secondNumber.replace(firstNumber,'');
        displayValue = operate(operation, parseFloat(firstNumber), parseFloat(secondNumber));
        changeDisplay(displayValue);

    }

    else if (buttonPressed == "Clear"){
        clearAll()
    }

    console.log(`firstNumber: ${firstNumber} 
operation: ${operation} 
secondNumber: ${secondNumber}
displayValue: ${displayValue}`);
}
