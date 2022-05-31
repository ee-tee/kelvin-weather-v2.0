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

    sliderOutput(valNum);

}

/* Round Slider */

// Call the roundSlider
$("#slider").roundSlider({
    min: -500,
    max: 500,
    step: 1,
    radius: 120,
    width: 30,
    handleSize: "+0",
    sliderType: "min-range",
    value: 0
});

// Get value from roundSlider
function sliderInput() {
    let sliderObjValue = $("#slider").data("roundSlider").getValue();
    document.getElementById("inputKelvin").value = sliderObjValue;
    temperatureConverter(sliderObjValue);
}

// Return value to roundSlider
function sliderOutput(value) {
    let sliderObj = $("#slider").data("roundSlider");
    sliderObj.setValue(value);
}