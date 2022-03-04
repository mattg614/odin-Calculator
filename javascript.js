function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b===0) alert("You can't divide by 0, hit clear to reset");
    if (b!==0) return a/b
}

function operate(operator,a,b) {
    const operands={
        'add' : add,
        'subtract' : subtract,
        'multiply' : multiply,
        'divide' : divide
    }
    return Math.round((operands[operator](parseFloat(a),parseFloat(b)))*100)/100;
}

// updateScreen(string)) {
//     screenText.textContent=string;
// }
function numButtonInput(num) {
    if (currentOperator==='equals') {
        currentNumberStr='';
        currentOperator='';
    }
    currentNumberStr+=num.textContent;
    screenText.textContent=currentNumberStr;

}

function operatorButtonInput(operator) {
    if (currentNumberStr==='') return;
    if (!currentOperator) {
        currentOperator=operator.id;
        previousNumberStr=currentNumberStr;
        currentNumberStr='';
    } else if (operator.id==='equals') {
        currentNumberStr=String(operate(currentOperator,previousNumberStr,currentNumberStr))
        previousNumberStr='';
        screenText.textContent=currentNumberStr;
        currentOperator='equals';
    } else {
        if (currentOperator==='equals') {
            currentOperator=operator.id;
            previousNumberStr=currentNumberStr;
            currentNumberStr='';
        } else {
            previousNumberStr=String(operate(currentOperator,previousNumberStr,currentNumberStr))
            currentNumberStr='';
            screenText.textContent=previousNumberStr;
            currentOperator=operator.id;
        }
    }
}
function decimalButtonInput() {
    if (!currentNumberStr.contains('.')) {
        currentNumberStr+='.';
        screenText.textContent=currentNumberStr;
    }
}
function clearButtonInput() {
    screenText.textContent='0';
    previousNumberStr='';
    currentNumberStr='';
    currentOperator='';
}

//code section to query buttons and perform different actions dependent on which button is pressed
const screenText=document.querySelector('.screen-nums')
let currentOperator='';
let currentNumberStr='';
let previousNumberStr='';
const num_btn=document.querySelectorAll('button');
num_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('num-button')) {
            numButtonInput(btn);
        }
        else if (btn.classList.contains('operator')) {
            operatorButtonInput(btn);
        } else if (btn.id==='decimal') {
            decimalButtonInput(btn);
        } else if (btn.id==='clear') {
            clearButtonInput();
        }
    });
})