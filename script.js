function add() {
    const inputElement1 = document.getElementById('num1');
    const inputElement2 = document.getElementById('num2');

    const sum = parseInt(inputElement1.value) + parseInt(inputElement2.value);

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Result :${sum}`;
} 

function clearInput(){
    const inputElement1 = document.getElementById('num1');
    inputElement1.value = '';
}