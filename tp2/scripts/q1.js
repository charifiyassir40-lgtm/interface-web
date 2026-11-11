/**
 * Question 1 - Convertisseur de température
 * Convertir des degrés Celsius en Fahrenheit
 */


const celsius = "temperature";
const nombre = 0;



/**
 * Convertit une température de Celsius en Fahrenheit
 * @param {number} celsius - La température en degrés Celsius
 * @returns {number} La température en degrés Fahrenheit
 */
function convertirCelsiusVersfahrenheit(celsius) {

    const Fahrenheit = celsius * 9 / 5 + 32;
    return Fahrenheit;
}

/**
 * Initialise les événements de la page
 */
function initialiser() {

    const celsius = document.querySelector("#c");
    const conversion = document.querySelector("#go");
    const Fahrenheit = document.querySelector("#out");



    conversion.addEventListener("click", () => {
        const champCelcius = Number(celsius.value);
        if (celsius.value === "") {
            Fahrenheit.textContent = `Veuillez entrer une valeur`;
        } else {
            const champFahrenheit = convertirCelsiusVersfahrenheit(champCelcius);
            Fahrenheit.textContent = `${champCelcius}°C = ${champFahrenheit}°F`;
        }

    });



}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { convertirCelsiusVersfahrenheit, initialiser };
