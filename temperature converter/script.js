document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitResult = document.getElementById("fahrenheitResult");
    const kelvinResult = document.getElementById("kelvinResult");
    const resultsDiv = document.getElementById("results");

    convertBtn.addEventListener("click", function () {
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;

            fahrenheitResult.textContent = fahrenheit.toFixed(2);
            kelvinResult.textContent = kelvin.toFixed(2);

            resultsDiv.classList.remove("hidden");
        }
    });
});