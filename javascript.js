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