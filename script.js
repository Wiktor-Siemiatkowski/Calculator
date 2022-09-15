// Display DOM manipulators
const display = document.querySelector('.display');
display.textContent = '';
const subDisplay = document.querySelector('.subdisplay');


// Numpad DOM manipulators
function inputNums(num) {
    return display.textContent = display.textContent + `${num}`;
};

const num1 = document.querySelector('.num1');
num1.addEventListener('click', () => inputNums(1));
const num2 = document.querySelector('.num2');
num2.addEventListener('click', () => inputNums(2));
const num3 = document.querySelector('.num3');
num3.addEventListener('click', () => inputNums(3));
const num4 = document.querySelector('.num4');
num4.addEventListener('click', () => inputNums(4));
const num5 = document.querySelector('.num5');
num5.addEventListener('click', () => inputNums(5));
const num6 = document.querySelector('.num6');
num6.addEventListener('click', () => inputNums(6));
const num7 = document.querySelector('.num7');
num7.addEventListener('click', () => inputNums(7));
const num8 = document.querySelector('.num8');
num8.addEventListener('click', () => inputNums(8));
const num9 = document.querySelector('.num9');
num9.addEventListener('click', () => inputNums(9));


const addition = document.querySelector('.add');

const calculate = document.querySelector('.operate');

let operationNums = [];

addition.addEventListener('click', () => {
    operationNums.push(display.textContent);
    operationNums.push('+');
    display.textContent = '';
    let operationNumsJoin = operationNums.join(' ');
    subDisplay.textContent = `${operationNumsJoin}`;
});

calculate.addEventListener('click', () => {
    display.textContent = operate(parseInt(operationNums[0]), parseInt(display.textContent), operationNums[1]);
    operationNums = [];
    subDisplay.textContent = '';
});


// Basic math functions
function add(a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
};

function divide(a, b) {
    return a / b;
};

function multiply(a, b) {
    return a * b;
};

function operate(a, b, operator) {
    if (operator === '+') {
        return add(a,b);
    } else if (operator === '-') {
        return subtract(a,b);
    } else if (operator === '/') {
        return divide(a,b);
    } else if (operator === '*') {
        return multiply(a,b);
    }
};