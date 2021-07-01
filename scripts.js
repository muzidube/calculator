const buttons = document.querySelectorAll(".btn");
const symButtons = document.querySelectorAll(".symBtn");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const answerBtn = document.getElementById("answerBtn");
const addBtn = document.getElementById("addBtn");
const equalsBtn = document.getElementById("equalsBtn");
const dotBtn = document.getElementById("dotBtn");
const input = document.getElementById("input");

window.addEventListener('keydown', forKeys);
buttons.forEach(btn => btn.addEventListener('click', forButtons));
symButtons.forEach(symBtn => symBtn.addEventListener('click', forSymbols));
clearBtn.addEventListener('click', forClear);
deleteBtn.addEventListener('click', forDelete);
answerBtn.addEventListener('click', forAnswer);
dotBtn.addEventListener('click', forDot);
equalsBtn.addEventListener('click', forEquals);

add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;


function forKeys(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    key.click();
};

function forButtons(e) {

    if (input.textContent == "0") {
        input.textContent = e.target.innerText;
    } 
    else if (input.textContent.includes(".")) {
        input.textContent += e.target.innerText;
    }
    else {
        input.textContent += e.target.innerText;
    }
    console.log(e.target.innerText); 
};

function forSymbols(e) {

    console.log(e.target.innerText);
    input.textContent += " " + e.target.innerText + " ";
};

function forClear(e) {
    let clearString = "";
    let refresh = "0"
    input.textContent = refresh;
    result.textContent = clearString;
};

function forDelete(e) {
    let newString = input.textContent.slice(0, -1) 
    input.textContent = newString;
};

function forAnswer(e) {
    let answer = result.textContent;
    let copyAnswer = answer.toString().slice();
    console.log(answer);
    input.textContent += copyAnswer.toString();
};

function forDot(e) {
    input.textContent += "" + e.target.innerText + "";
    
};

function forEquals(e) {
    input.textContent += "";
    result.textContent = roundNumber(equation(input.textContent));
    console.log(equation(input.textContent));
};

function calculation(a, symbol, b) {

	a = Number(a);
	b = Number(b);

    if (symbol === "+") return a + b;
    if (symbol === "-") return a - b;
    if (symbol === "x") return a * b;
    if (symbol === "/") return a / b;
};

function equation(equation) {

	equation = equation.split(" ");
    console.log(equation);

	const symbols = ["/", "x", "-", "+"];
	let a;
	let b;
	let symbol;
	let symbolArray;
	let result;

	for (i = 0; i < symbols.length; i++) {
		while (equation.includes(symbols[i])) {
			symbolArray = equation.findIndex(item => item === symbols[i]);
			a = equation[symbolArray-1];
			symbol = equation[symbolArray];
			b = equation[symbolArray+1];
			result = calculation(a, symbol, b);
			equation.splice(symbolArray - 1, 3, result);
		}
	}

	return result;
};

function roundNumber(number) {
    return Math.round(number * 1000) / 1000;
};

