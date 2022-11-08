const result = document.getElementById("result");
const pwLength = document.getElementById("length");
const uppercaseCB = document.getElementById("uppercase");
const lowercaseCB = document.getElementById("lowercase");
const numbersCB = document.getElementById("numbers");
const symbolsCB = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const clipboardBtn = document.getElementById("clipboard");

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

clipboardBtn.addEventListener("click", () => {});

generateBtn.addEventListener("click", () => {
	let lowerOP = getRandomLower();
	let upperOP = getRandomUpper();
	let numOP = getRandomNumber();
	let symbolOP = getRandomSymbol();
	let OP = lowerOP + upperOP + numOP + symbolOP;
	let password = "";
	for (let i = 0; i < pwLength; i++) {
		password = password + OP[Math.floor(Math.random() * OP.length)];
	}
	document.querySelector("#result").textContent = password;
});

function generatePassword(lower, upper, number, symbol, length) {}

function getRandomLower() {
	if (lowercaseCB.checked == "true") {
		let counter = Math.floor(pwLength / 2);
		let lowerCaseAlpha = "abcdefghijklmnopqrstuvwxyz";
		let output = "";
		for (let i = 0; i < counter; i++) {
			output = output + lowerCaseAlpha[Math.floor(Math.random() * 26)];
		}
		return output;
	} else {
		return "";
	}
}

function getRandomUpper() {
	if (uppercaseCB.checked == "true") {
		let counter = Math.floor(pwLength / 2);
		let upperCaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let output = "";
		for (let i = 0; i < counter; i++) {
			output = output + upperCaseAlpha[Math.floor(Math.random() * 26)];
		}
		return output;
	} else {
		return "";
	}
}

function getRandomNumber() {
	if (numbersCB.checked == "true") {
		let counter = Math.floor(pwLength / 2);
		let numList = "0123456789";
		let output = "";
		for (let i = 0; i < counter; i++) {
			output = output + numList[Math.floor(Math.random() * 10)];
		}
		return output;
	} else {
		return "";
	}
}

function getRandomSymbol() {
	if (symbolsCB.checked == "true") {
		let counter = Math.floor(pwLength / 2);
		let symbolList = "!@#$%&*-_";
		let output = "";
		for (let i = 0; i < counter; i++) {
			output = output + symbolList[Math.floor(Math.random() * 9)];
		}
		return output;
	} else {
		return "";
	}
}
