/**
 * Question 6 - Appels API avec fetch et async/await
 * Charger des recettes depuis une API externe
 */

/**
 * Charge les recettes depuis l'API
 */
async function chargerRecettes() {

    const listesRecettes = document.querySelector("#recettes");
    listesRecettes.textContent = "Chargements en cours";


    try {
        const conserverDonnees = await fetch("https://dummyjson.com/recipes?limit=3")
        if (!conserverDonnees.ok) {
            throw new Error("Erreur de chargement");
        }
        const reponseJson = await conserverDonnees.json();

        const tableauRecettes = reponseJson.recipes;

        listesRecettes.textContent = "";

        tableauRecettes.forEach(recette => {
            const elementLi = document.createElement("li");
            listesRecettes.append(elementLi);
            elementLi.textContent = `${recette.name} - ${recette.prepTimeMinutes} min - ${recette.cuisine} `;
        });

    } catch (erreur) {
        listesRecettes.textContent = "Erreur";
    }
}


/**
 * Initialise les événements de la page
 */
function initialiser() {

    const charger = document.querySelector("#charger");
    const recettes2 = document.querySelector("#recettes");


    charger.addEventListener("click", () => {
        chargerRecettes();
    });
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { chargerRecettes, initialiser };

