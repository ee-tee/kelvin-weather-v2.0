/* ---------------------------------------------------------------------------------------
    CodeAcademy JavaScript Project: Kelvin Weather
--------------------------------------------------------------------------------------- *//*

LEARN JAVASCRIPT
Kelvin Weather

Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there's a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let's convert Kelvin to Celsius, then to Fahrenheit.
For example, 283 K converts to 10 °C which converts to 50 °F.

*//* -------------------------------------------------------------------------------------
    Task Overview
--------------------------------------------------------------------------------------- *//*

1) The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293. The value saved to kelvin will stay constant. Choose the variable type with this in mind.

2) Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin. Let's convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius.

3) Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit. In the next step we will round the number saved to fahrenheit. Choose the variable type that allows you to change its value.
    Fahrenheit = Celsius * (9/5) + 32

4) When you convert from Celsius to Fahrenheit, you often get a decimal number. Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.

5) By using variables, your program should work for any Kelvin temperature — just change the value of kelvin and run the program again. Find out: What's 0 Kelvin in Fahrenheit?

6) Convert celsius to the Newton scale using the equation below and round down the Newton temperature using the .floor() method.
    Newton = Celsius * (33/100)

7) Use console.log and string interpolation to log the temperature results to the console.
    E.g. The temperature is TEMPERATURE degrees Fahrenheit.

*//* -------------------------------------------------------------------------------------
    Script
--------------------------------------------------------------------------------------- */

//Create variable for temperature in Kelvin
const kelvin = 293;

//Create variable for temperature in Celcius
let celsius = kelvin - 273;

//Create variable for temperature in Fahrenheit
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

//Create variable for temperature in Newton
let newton = Math.floor(celsius * (33/100));

//Temperature Readings
console.log(`The temperature is ${kelvin} degrees Kelvin.`);            //The temperature is 293 degrees Kelvin.
console.log(`The temperature is ${celsius} degrees Celsius.`);          //The temperature is 20 degrees Celsius.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);    //The temperature is 68 degrees Fahrenheit.
console.log(`The temperature is ${newton} degrees Newton.`);            //The temperature is 6 degrees Newton.

//For task 5, if we change the value for kelvin to 0, console log will show the following result:
//The temperature is -460 degrees Fahrenheit.

/* -------------------------------------------------------------------------------------
    The End - Goodbye Mr. Kelvin!
--------------------------------------------------------------------------------------- */
