document.getElementById("celsius_inputbox").addEventListener("input", function() {
    var celsius = document.getElementById("celsius_inputbox").value;
    if (celsius == "") {
        document.getElementById("kelvin_input").value = "";
        document.getElementById("fahrenheit_input").value = "";
        return;
    }
    celsius = parseInt(celsius);
    var kelvin = celsius + 273.15;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("kelvin_input").value = kelvin.toFixed(2);
    document.getElementById("fahrenheit_input").value = fahrenheit.toFixed(2);
});
