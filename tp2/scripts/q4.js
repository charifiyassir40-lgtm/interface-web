/**
 * Question 4 - Manipulation du DOM
 * Navigation, Insertion et Clonage
 */

/**
 * Initialise toutes les fonctionnalités de la page
 */
function initialiser() {
    
    const liste = document.querySelector("#fruits");
    const out = document.querySelector("#out");
    
    
     const pomme = liste.firstElementChild.textContent;
     const banane = liste.children[0].nextElementSibling.textContent;
     const orange = liste.lastElementChild.textContent;
     out.textContent = `Premier : ${pomme} | Dernier : ${orange} | Après le 1er : ${banane}` ;
     

    
    const ajouterTete = document.querySelector("#addHead");
    const ajouterFin = document.querySelector("#addTail");
    
    ajouterTete.addEventListener("click",() =>{
        const paragraphe = document.createElement("p");
        paragraphe.textContent = "(tête)";
        document.querySelector("#zone").prepend(paragraphe);
    });

    ajouterFin.addEventListener("click",() =>{
        const paragraphe = document.createElement("p");
        paragraphe.textContent = "(fin)";
        document.querySelector("#zone").append(paragraphe);
    });

    
    const cloner = document.querySelector("#cloner");
    const remplacer = document.querySelector("#remplacer");
    const vider = document.querySelector("#vider");
    let compteur = 2 ;

    cloner.addEventListener ("click",() =>{
        const carte = document.querySelector(".card")
        const copie = carte.cloneNode(true)
        copie.textContent = `Carte # ${compteur}` ;
        carte.parentNode.append(copie); 
        compteur ++ ;
    });
    
    remplacer.addEventListener ("click",() =>{
        const carte = document.querySelector(".card");
        const modifierCarte = document.createElement("div");
        modifierCarte.textContent = "Remplacement";
        modifierCarte.classList.add("card");
        carte.replaceWith(modifierCarte);
        });

    vider.addEventListener ("click",() =>{
        const carte = document.querySelectorAll(".card");
        
        carte.forEach(carte => {
            carte.remove();
        });
        
        
        
        });


    
    const insertion2 = document.querySelector("#ins2");
    insertion2.addEventListener ("click",() =>{
    const elementInserer = document.createElement("li");
    elementInserer.textContent = "Étape 1.5";
    steps.children[1].before(elementInserer);
    });    
}

// Initialisation au chargement de la page
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initialiser);
}

// Export pour les tests
export { initialiser };
