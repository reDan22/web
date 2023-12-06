$("a").onmouseover=aColorOver(this);


$("a").onmouseout=aColorOut(this);


function aColorOver(aColorOutElement){
	aColorOutElement.style.color="orange";
}

	
function aColorOut(aColorOutElement){
	aColorOutElement.style.color="yellow";
}


function Calculator(){
	let FirstNumber = prompt("Enter 1st number:");
	let Action = prompt("Your Action:");
	let SecondNumber = prompt("Enter 2nd number;");
	let result;
	switch(Action){
		case "-":
		result = FirstNumber - SecondNumber
		break;
		case "+":
		result = FirstNumber + SecondNumber
		break;
		case "*":
		result = FirstNumber * SecondNumber
		break;
		case "/":
		result = FirstNumber / SecondNumber
		break;
		}
alert("Result is:" + result);
}

