// Function for Addition of Two Number

function add() {
    const inputElement1 = document.getElementById('num1');
    const inputElement2 = document.getElementById('num2');

    const sum = parseInt(inputElement1.value) + parseInt(inputElement2.value);

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Result :${sum}`;
}

// Function for Subtraction of Two Numbers

   function sub() {
    const inputElement1 = document.getElementById('num1');
    const inputElement2 = document.getElementById('num2');

    const sub = parseInt(inputElement1.value) - parseInt(inputElement2.value);

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Result :${sub}`;
   }

// Function for Clearing the Input Boxes

function clearInput() {
    const inputElement1 = document.getElementById('num1');
    inputElement1.value = '';

    const inputElement2 = document.getElementById('num2');
    inputElement2.value = '';

    const resultElement = document.getElementById('result');
    resultElement.innerText = 'Result :';
}