function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelector = document.getElementById('unitSelector');
    const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;
    let convertedTemperature;
    let unit;

    if (selectedUnit === 'celsius') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        unit = 'Fahrenheit';
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        unit = 'Celsius';
    } else if (selectedUnit === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        unit = 'Kelvin';
    }

    document.getElementById('result').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit}`;
}
