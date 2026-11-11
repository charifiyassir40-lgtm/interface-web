/**
 * Question 2 - Fonctions anonymes et fléchées
 * Créer des fonctions fléchées pour addition et multiplication
 */


//fonction fléchée add(a, b) qui retourne a + b
const add = (a, b) => a + b;

// fonction fléchée mul(a, b) qui retourne a * b
const mul = (a, b) => a * b;

/**
 * Initialise les événements de la page
 */
function initialiser() {

    const addition = document.querySelector("#a");
    const multiplication = document.querySelector("#m");
    const resultat = document.querySelector("#res");



    addition.addEventListener("click", () => {

        const champAddition = add(3, 4);

        resultat.textContent = champAddition;


    });


    multiplication.addEventListener("click", () => {
        const champMultiplication = mul(3, 4);
        resultat.textContent = champMultiplication;


    });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { add, mul, initialiser };
