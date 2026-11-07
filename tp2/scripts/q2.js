/**
 * Question 2 - Fonctions anonymes et fléchées
 * Créer des fonctions fléchées pour addition et multiplication
 */

// TODO: Créer une fonction fléchée add(a, b) qui retourne a + b

const add = (a,b) => a + b;

// TODO: Créer une fonction fléchée mul(a, b) qui retourne a * b
const mul = (a,b) => a * b;

/**
 * Initialise les événements de la page
 */
function initialiser() {
    // TODO: Récupérer les éléments DOM (#a, #m, #res)
    const addition = document.querySelector("#a");
    const multiplication = document.querySelector("#m");
    const resultat = document.querySelector("#res");


    // TODO: Au clic sur #a, calculer add(3, 4) et afficher dans #res
    addition.addEventListener("click",() =>{
     
    const  champAddition = add(3,4);

     resultat.textContent = champAddition ;


    });

    // TODO: Au clic sur #m, calculer mul(3, 4) et afficher dans #res
    multiplication.addEventListener("click",() =>{
        const champMultiplication = mul(3,4);
        resultat.textContent = champMultiplication;
        

    });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { add, mul, initialiser };
