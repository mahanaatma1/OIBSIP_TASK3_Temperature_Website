function tempconvert() {
    var celsius = parseFloat(document.getElementById('celsius_input').value);
    var fahrenheit = parseFloat(document.getElementById('fahrenheit_input').value);

    if (!isNaN(celsius) && !isNaN(fahrenheit)) {
        alert("Please input only one temperature value at a time.");
    }
    else if (!isNaN(celsius)) {
        fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit_input').value = fahrenheit.toFixed(1);
    }
    else if (!isNaN(fahrenheit)) {
        celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius_input').value = celsius.toFixed(1);
    }
}

function clearForm() {
    document.getElementById('celsius_input').value = '';
    document.getElementById('fahrenheit_input').value = '';
}


document.getElementById('submit').onclick = tempconvert;
document.getElementById('reset').onclick = clearForm;