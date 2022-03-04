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
    //Return statement that calls the function based on using the object call and then rounds to two decimal places
    return Math.round((operands[operator](parseFloat(a),parseFloat(b)))*100)/100;
}



function numButtonInput(num) {
    //reset the numbers and operator if a number is input immediately after hitting equals
    if (currentOperator==='equals') {
        currentNumberStr='';
        currentOperator='';
    }
    //Update the current number string and display on screen
    currentNumberStr+=num.textContent;
    screenText.textContent=currentNumberStr;

}

function operatorButtonInput(operator) {
    //If the current number String is empty and an operator is input nothing should occurr. 
    if (currentNumberStr==='') return;
    //If no current operator assign current operator, move current number to previous number and 
    //set current number to blank
    if (!currentOperator) {
        currentOperator=operator.id;
        previousNumberStr=currentNumberStr;
        currentNumberStr='';
    
    } else if (operator.id==='equals') {
        //The equals button is pressed use the operate function to compute the result and set to current nubmer str
        currentNumberStr=String(operate(currentOperator,previousNumberStr,currentNumberStr))
        //previous number is blanked out as if the program is fresh
        previousNumberStr='';
        //result is displayed and current operator is changed so program knows an equals was just input
        screenText.textContent=currentNumberStr;
        currentOperator='equals';
    } else {
        if (currentOperator==='equals') {
            //This section is for the use case that the equals sign is pressed and then the next button pressed is 
            //another operator, not a number
            //The program now acts as if a new operator call is taken and moves current number string to previous
            currentOperator=operator.id;
            previousNumberStr=currentNumberStr;
            currentNumberStr='';
        } else {
            //This use case is for when you would press an operator after entering the second number
            //This occurs when an operator is pressed and there was already a current operator previous and current number
            //It is the equivalent of pressing the equals but now a new current operator is set
            previousNumberStr=String(operate(currentOperator,previousNumberStr,currentNumberStr))
            currentNumberStr='';
            screenText.textContent=previousNumberStr;
            currentOperator=operator.id;
        }
    }
}
function decimalButtonInput() {
    //check if there is already a decimal if not then a decimal may be added
    if (!currentNumberStr.contains('.')) {
        currentNumberStr+='.';
        screenText.textContent=currentNumberStr;
    }
}
function clearButtonInput() {
    //resets all the variables to their initial values
    screenText.textContent='0';
    previousNumberStr='';
    currentNumberStr='';
    currentOperator='';
}
//initialize variables
const screenText=document.querySelector('.screen-nums')
let currentOperator='';
let currentNumberStr='';
let previousNumberStr='';
let clickedBtn;
const button=document.querySelectorAll('button');

//loop over each button pressed and act accordingly
button.forEach((btn) => {
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