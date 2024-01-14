let currentInput = '';
let display = document.getElementById('display');

function appendToDisplay(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.textContent = currentInput;
  } catch (error) {
    currentInput = 'Error';
    display.textContent = currentInput;
  }
}
