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
    if (b!==0) return a/b
}

function operate(operator,a,b) {
    const operands={
        '+' : add,
        '-' : subtract,
        '*' : multiply,
        '/' : divide
    }
    return operands[operator](a,b);
}
function numButtonInput(num) {
    currentNumberStr+=num.textContent;
    screenText.textContent=currentNumberStr;

}
//code section to query buttons and perform different actions dependent on which button is pressed
const screenText=document.querySelector('.screen-nums')
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
            clearButtonInput(btn);
        }
    });
})