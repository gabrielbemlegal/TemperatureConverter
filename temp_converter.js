function cF(celsius) {
    return (celsius * 9/5) + 32;
}

function fC(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function updatePlaceholder() {
    const tempType = document.querySelector('input[name="tempType"]:checked').value;
    const inputField = document.getElementById('inputValue');
    if (tempType === 'cF') {
        inputField.placeholder = "Enter Celsius"
    } else {
        inputField.placeholder = "Enter Fahrenheit";
    }
}

function convertTemp() {
    const tempType = document.querySelector('input[name="tempType"]:checked').value;
    const inputValue = document.getElementById('inputValue').value;
    let result;

    if (inputValue === "") {
        document.getElementById('result').innerText = "Please enter a value";
        return;
    }

    if (tempType === "cF") {
        result = cF(parseFloat(inputValue));
        document.getElementById('result').innerText = `${inputValue}ºC = ${result.toFixed(2)}ºF`;
    } else {
        result = fC(parseFloat(inputValue));
        document.getElementById('result').innerText = `${inputValue}ºF = ${result.toFixed(2)}ºC`;
    }
}
