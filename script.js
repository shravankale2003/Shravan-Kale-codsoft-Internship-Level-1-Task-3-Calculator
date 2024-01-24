let currentInput = '';

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}

function appendInput(value) {
  currentInput += value;
  updateDisplay();
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (error) {
    currentInput = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  updateDisplay();
}
