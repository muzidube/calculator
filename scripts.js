const buttons = document.querySelectorAll(".btn");
const symButtons = document.querySelectorAll(".symBtn");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");
const answerBtn = document.getElementById("answerBtn");
const addBtn = document.getElementById("addBtn");
const equalsBtn = document.getElementById("equalsBtn");
const dotBtn = document.getElementById("dotBtn");
const input = document.getElementById("input");


add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

buttons.forEach(btn => btn.addEventListener('click', function(e) {

    if (input.textContent == "0") {
        input.textContent = e.target.innerText;
    } 
    else {
        input.textContent += e.target.innerText;
    }
    console.log(e.target.innerText); 
}));

symButtons.forEach(symBtn => symBtn.addEventListener('click', function(e) {

    console.log(e.target.innerText);
    input.textContent += " " + e.target.innerText + " ";
}));

clearBtn.addEventListener('click', function(e) {
    let clearString = "";
    let refresh = "0"
    input.textContent = refresh;
    result.textContent = clearString;
});

deleteBtn.addEventListener('click', function(e) {
    let newString = input.textContent.slice(0, -1) 
    input.textContent = newString;
});

answerBtn.addEventListener('click', function(e) {
    let answer = result.textContent;
    let copyAnswer = answer.toString().slice();
    console.log(answer);
    input.textContent += copyAnswer.toString();
});


dotBtn.addEventListener('click', function(e) {
    console.log(e.target.innerText);
    input.textContent += " " + e.target.innerText + " ";
});

equalsBtn.addEventListener('click', function(e) {
    input.textContent += "";
    result.textContent = equation(input.textContent);
    console.log(equation(input.textContent));
});



function calculation(a, symbol, b) {

	a = Number(a);
	b = Number(b);

    if (symbol === "+") return a + b;
    if (symbol === "-") return a - b;
    if (symbol === "x") return a * b;
    if (symbol === "/") return a / b;
}

function equation(equation) {

	equation = equation.split(" ");

	const symbols = ["/", "x", "+", "-"];
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
}

