function farehnheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

function celsiusToFarehnheit(c) {
    return c * 9 / 5 + 32;
}

function farehnheitToKelvin(f) {
    return (f + 459.67) * 5 / 9;
}

function kelvinToFarehnheit(k) {
    return k * 9 / 5 - 459.67;
}

function celsiusToKelvin(c) {
    return c + 273.15;
}

function kelvinToCelsius(k) {
    return k - 273.15;
}

function convertTemperature() {
    console.log("xz")
    var input = document.getElementById("input").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var output = document.getElementById("output");
    var result = 0;
    if (inputUnit == "F") {
        if (outputUnit == "C") {
            result = farehnheitToCelsius(input);
        } else if (outputUnit == "K") {
            result = farehnheitToKelvin(input);
        } else {
            result = input;
        }
    } else if (inputUnit == "C") {
        if (outputUnit == "F") {
            result = celsiusToFarehnheit(input);
        } else if (outputUnit == "K") {
            result = celsiusToKelvin(input);
        } else {
            result = input;
        }
    } else if (inputUnit == "K") {
        if (outputUnit == "F") {
            result = kelvinToFarehnheit(input);
        } else if (outputUnit == "C") {
            result = kelvinToCelsius(input);
        } else {
            result = input;
        }
    } else {
        result = input;
    }
    alert(result);
}