// Display numbers array
let operationNums = [];

// Display DOM manipulators
const display = document.querySelector('.display');
display.textContent = '';
const subDisplay = document.querySelector('.subdisplay');


// Numpad DOM manipulators
function inputNums(num) {
    return display.textContent = display.textContent + `${num}`;
};

const num0 = document.querySelector('.num0');
num0.addEventListener('click', () => inputNums(0));
document.addEventListener('keydown', (e) => {if (e.key == 0) {inputNums(0)}});
const num1 = document.querySelector('.num1');
num1.addEventListener('click', () => inputNums(1));
document.addEventListener('keydown', (e) => {if (e.key == 1) {inputNums(1)}});
const num2 = document.querySelector('.num2');
num2.addEventListener('click', () => inputNums(2));
document.addEventListener('keydown', (e) => {if (e.key == 2) {inputNums(2)}});
const num3 = document.querySelector('.num3');
num3.addEventListener('click', () => inputNums(3));
document.addEventListener('keydown', (e) => {if (e.key == 3) {inputNums(3)}});
const num4 = document.querySelector('.num4');
num4.addEventListener('click', () => inputNums(4));
document.addEventListener('keydown', (e) => {if (e.key == 4) {inputNums(4)}});
const num5 = document.querySelector('.num5');
num5.addEventListener('click', () => inputNums(5));
document.addEventListener('keydown', (e) => {if (e.key == 5) {inputNums(5)}});
const num6 = document.querySelector('.num6');
num6.addEventListener('click', () => inputNums(6));
document.addEventListener('keydown', (e) => {if (e.key == 6) {inputNums(6)}});
const num7 = document.querySelector('.num7');
num7.addEventListener('click', () => inputNums(7));
document.addEventListener('keydown', (e) => {if (e.key == 7) {inputNums(7)}});
const num8 = document.querySelector('.num8');
num8.addEventListener('click', () => inputNums(8));
document.addEventListener('keydown', (e) => {if (e.key == 8) {inputNums(8)}});
const num9 = document.querySelector('.num9');
num9.addEventListener('click', () => inputNums(9));
document.addEventListener('keydown', (e) => {if (e.key == 9) {inputNums(9)}});

// Float dot DOM manipulator and function

function addFloatDot() {
    if (display.textContent.includes('.')) {
        floatDot.getAttribute('disabled');
    } else {
        inputNums('.')}
    };

const floatDot = document.querySelector('.float');
floatDot.addEventListener('click', () => addFloatDot());
document.addEventListener('keydown', (e) => {if (e.key == '.') {addFloatDot()}});

// Delete button DOM manipulator and function

const deleteBtn = document.querySelector('.del');
deleteBtn.addEventListener('click', () => display.textContent = display.textContent.slice(0, -1));

// Operator buttons and function

function addOperator(operator) {
    if (operationNums.length == 0) { 
        operationNums.push(display.textContent);
        operationNums.push(`${operator}`);
        display.textContent = '';
        let operationNumsJoin = operationNums.join(' ');
        subDisplay.textContent = `${operationNumsJoin}`;
    } else {
        operationNums[0] = +operate(parseFloat(operationNums[0]), parseFloat(display.textContent), operationNums[1]).toFixed(2);
        operationNums.pop();
        operationNums.push(`${operator}`);
        display.textContent = '';
        let operationNumsJoin = operationNums.join(' ');
        subDisplay.textContent = `${operationNumsJoin}`;
    }
};

const addition = document.querySelector('.add');
addition.addEventListener('click', () => addOperator('+'));
document.addEventListener('keydown', (e) => {if (e.key == '+') {addOperator('+')}});
const subtraction = document.querySelector('.subtract');
subtraction.addEventListener('click', () => addOperator('-'));
document.addEventListener('keydown', (e) => {if (e.key == '-') {addOperator('-')}});
const division = document.querySelector('.divide');
division.addEventListener('click', () => addOperator('/'));
document.addEventListener('keydown', (e) => {if (e.key == '/') {addOperator('/')}});
const multiplication = document.querySelector('.multiply');
multiplication.addEventListener('click', () => addOperator('*'));
document.addEventListener('keydown', (e) => {if (e.key == '*') {addOperator('*')}});


// Main operate button and function
const calculate = document.querySelector('.operate');

function operateMain() {
    display.textContent = +operate(parseFloat(operationNums[0]), parseFloat(display.textContent), operationNums[1]).toFixed(2);
    operationNums = [];
    subDisplay.textContent = '';
}

calculate.addEventListener('click', () => operateMain());
document.addEventListener('keydown', (e) => {if (e.key == 'Enter') {operateMain()}});

// Clear Button function
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
    operationNums = [];
    display.textContent = '';
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