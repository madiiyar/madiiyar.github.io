const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multipyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
let action = "+";
console.log(input1.value);
console.log(input2.value);

plusBtn.onclick = function () {
  action = "+";
  console.log(action);
};

minusBtn.onclick = function () {
  action = "-";
  console.log(action);
};

multipyBtn.onclick = function () {
  action = "*";
  console.log(action);
};

divideBtn.onclick = function () {
  action = "/";
  console.log(action);
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = +Number(inp1.value);
  const num2 = +Number(inp2.value);
  //   return eval(`${num1} ${actionSymbol} ${num2}`);
  if (actionSymbol == "+") {
    return num1 + num2;
  }
  if (actionSymbol == "-") {
    return num1 - num2;
  }
  if (actionSymbol == "*") {
    return num1 * num2;
  }
  if (actionSymbol == "/") {
    return num1 / num2;
  }

  //   return actionSymbol == "+" ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action);
  printResult(result);
  //   if (action == "+") {
  //     const sum = +input1.value + +input2.value;
  //     printResult(sum);
  //   } else if (action == "-") {
  //     const sum = +input1.value - +input2.value;
  //     printResult(sum);
  //   }
};

// console.log(typeof sum);
// console.log(input1.value);
// resultElement.textContent = 11;
