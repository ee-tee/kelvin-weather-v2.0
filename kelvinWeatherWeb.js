/* When the input field receives input, convert the value */
function temperatureConverter(valNum) {

    valNum = parseFloat(valNum);

    // From Kelvin - No Change
    document.getElementById("outputKelvin").innerHTML=(valNum).toFixed(2);

    // From Kelvin to Fahrenheit
    document.getElementById("outputFahrenheit").innerHTML=(((valNum-273.15)*1.8)+32).toFixed(2);

    // From Kelvin to Celsius
    document.getElementById("outputCelcius").innerHTML=(valNum-273.15).toFixed(2);

    // From Kelvin to Newton
    document.getElementById("outputNewton").innerHTML=((valNum-273.15)*33/100).toFixed(2);

}