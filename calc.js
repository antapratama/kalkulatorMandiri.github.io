const calculatorScreen = document.querySelector(".screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currNumber);
  });
});

let prevNumber = "";
let calcOper = "";
let currNumber = "0";
// let currNumber = `${calculatorScreen.value}`;

const inputNumber = (number) => {
  if (currNumber === "0") {
    currNumber = number;
  } else {
    currNumber += number;
  }
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calcOper === "") {
    prevNumber = currNumber;
  }
  calcOper = operator;
  currNumber = "0";
};

const equalSign = document.querySelector(".equal");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currNumber);
});

const calculate = () => {
  let result = "";
  switch (calcOper) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currNumber);
      break;
    default:
      return;
  }
  currNumber = result;
  calcOper = "";
};

const clear = document.querySelector(".allClear");

clear.addEventListener("click", () => {
  clearAll();
  updateScreen(currNumber);
});

const clearAll = () => {
  prevNumber = "";
  calcOper = "";
  currNumber = "0";
};

const decimal = document.querySelector(".decimal");

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currNumber);
});

const inputDecimal = (dot) => {
  if (currNumber.includes(".")) {
    return;
  }
  currNumber += dot;
};

const percent = document.querySelector(".percent");
percent.addEventListener("click", () => {
  currNumber = currNumber / 100;
  updateScreen(currNumber);
});
