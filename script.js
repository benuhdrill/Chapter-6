function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquareRoot() {
    let display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSquare() {
    let display = document.getElementById('display');
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateSine() {
    let display = document.getElementById('display');
    try {
        display.value = Math.sin(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function calculateCosine() {
    let display = document.getElementById('display');
    try {
        display.value = Math.cos(eval(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}
