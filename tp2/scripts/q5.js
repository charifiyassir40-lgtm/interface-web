/**
 * Question 5 - Données numériques et gestion du temps
 * Compteur avec setInterval et clearInterval
 */


let compteur = 0;
let idIntervalle = null;

/**
 * Initialise les événements de la page
 */
function initialiser() {

    const affichage = document.querySelector("#n");
    const start = document.querySelector("#start");
    const stop = document.querySelector("#stop");
    const double = document.querySelector("#double");


    start.addEventListener("click", () => {
        if (idIntervalle === null) {
            idIntervalle = setInterval(() => {
                compteur += 1;
                affichage.textContent = compteur;
            }, 1000);;
        }
    });

    stop.addEventListener("click", () => {
        clearInterval(idIntervalle);
        idIntervalle = null;
    });


    double.addEventListener("click", () => {
        compteur = compteur * 2;
        affichage.textContent = compteur;
    });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
