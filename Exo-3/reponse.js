// ===================== 1. Les flèches =====================

// On cherche dans la page l'élément qui a la classe "arrowLeft" (la flèche de gauche)
const flecheGauche = document.querySelector(".arrowLeft");
// On cherche dans la page l'élément qui a la classe "arrowRight" (la flèche de droite)
const flecheDroite = document.querySelector(".arrowRight");


// ===================== 2. Les images de cheveux, rangées par couleur =====================

// On crée un tableau pour les cheveux noirs.
// Chaque case du tableau est une image, toujours dans le même ordre : courte, puis moyenne, puis longue.
const cheveuxNoirs = [
    document.querySelector(".blackHair.coupeCourte"),  // case 0 : l'image noire courte
    document.querySelector(".blackHair.coupeMoyenne"), // case 1 : l'image noire moyenne
    document.querySelector(".blackHair.coupeLongue"),  // case 2 : l'image noire longue
];

// Même chose, mais pour les cheveux blonds
const cheveuxBlonds = [
    document.querySelector(".blondHair.coupeCourte"),  // case 0 : l'image blonde courte
    document.querySelector(".blondHair.coupeMoyenne"), // case 1 : l'image blonde moyenne
    document.querySelector(".blondHair.coupeLongue"),  // case 2 : l'image blonde longue
];

// Même chose, mais pour les cheveux turquoise
const cheveuxTurquoise = [
    document.querySelector(".turquoiseHair.coupeCourte"),  // case 0 : l'image turquoise courte
    document.querySelector(".turquoiseHair.coupeMoyenne"), // case 1 : l'image turquoise moyenne
    document.querySelector(".turquoiseHair.coupeLongue"),  // case 2 : l'image turquoise longue
];

// On regroupe les 3 tableaux dans un seul objet.
// Ça permet d'écrire cheveux["black"] (ou cheveux.black) pour retrouver
// directement le bon tableau selon la couleur voulue.
const cheveux = {
    black: cheveuxNoirs,
    blond: cheveuxBlonds,
    turquoise: cheveuxTurquoise,
};


// ===================== 3. Ce qui est affiché en ce moment =====================

// Le nom de la couleur actuellement affichée. On commence sur "black".
let couleurActuelle = "black";
// La longueur actuellement affichée : 0 = courte, 1 = moyenne, 2 = longue. On commence à 0.
let indexLongueur = 0;


// ===================== 4. Afficher la bonne image =====================

// Cette fonction regarde TOUTES les images (les 3 couleurs) et décide,
// pour chacune, si elle doit être visible ou cachée.
function afficherCheveux() {

    // "for...in" permet de parcourir les clés de l'objet "cheveux" une par une :
    // d'abord "black", puis "blond", puis "turquoise"
    for (const couleur in cheveux) {
        // On récupère le tableau des 3 images de cette couleur (ex: cheveux["black"])
        const images = cheveux[couleur];
        console.log("images ! ", images);

        // On parcourt les 3 images du tableau une par une : i vaudra 0, puis 1, puis 2
        for (let i = 0; i < images.length; i++) {

            // On affiche l'image seulement si SA couleur est la couleur choisie
            // ET si SA position (i) est la longueur choisie
            if (couleur === couleurActuelle && i === indexLongueur) {
                images[i].hidden = false; // false = pas caché = visible
            } else {
                images[i].hidden = true; // true = caché
            }
        }
    }

    // Une fois l'affichage mis à jour, on met aussi à jour l'apparence des flèches
    mettreAJourFleches();
}

// On appelle la fonction une première fois, pour afficher l'état de départ dès le chargement de la page
afficherCheveux();


// ===================== 5. Assombrir les flèches en bout de course =====================

// Cette fonction rend une flèche plus sombre quand on ne peut plus avancer/reculer dans ce sens
function mettreAJourFleches() {

    // Si on est déjà sur la longueur courte (index 0), il n'y a rien "avant" :
    // on assombrit la flèche de gauche
    if (indexLongueur === 0) {
        flecheGauche.style.opacity = "0.3";
    } else {
        // Sinon, la flèche de gauche reste normale
        flecheGauche.style.opacity = "1";
    }

    // Si on est déjà sur la longueur longue (index 2), il n'y a rien "après" :
    // on assombrit la flèche de droite
    if (indexLongueur === 2) {
        flecheDroite.style.opacity = "0.3";
    } else {
        // Sinon, la flèche de droite reste normale
        flecheDroite.style.opacity = "1";
    }
}


// ===================== 6. Clic sur la flèche droite : longueur suivante =====================

// "addEventListener" écoute les clics sur flecheDroite,
// et exécute la fonction donnée à chaque clic
flecheDroite.addEventListener("click", function () {

    // On n'avance que si on n'est pas déjà sur la dernière longueur (2 = longue)
    // Ça empêche de dépasser "longue" et donc d'boucler en revenant à "courte"
    if (indexLongueur < 2) {
        indexLongueur = indexLongueur + 1; // on passe à la longueur suivante
        afficherCheveux(); // on met à jour l'affichage avec la nouvelle longueur
    }
});


// ===================== 7. Clic sur la flèche gauche : longueur précédente =====================

flecheGauche.addEventListener("click", function () {

    // On ne recule que si on n'est pas déjà sur la première longueur (0 = courte)
    // Ça empêche de descendre en dessous de "courte"
    if (indexLongueur > 0) {
        indexLongueur = indexLongueur - 1; // on passe à la longueur précédente
        afficherCheveux(); // on met à jour l'affichage avec la nouvelle longueur
    }
});


// ===================== 8. Changer de couleur avec les div .black / .blond / .turquoise =====================

// On récupère les 3 pastilles de couleur dans le sélecteur de couleur
const boutonNoir = document.querySelector(".black");
const boutonBlond = document.querySelector(".blond");
const boutonTurquoise = document.querySelector(".turquoise");

// Au clic sur la pastille noire : on change la couleur actuelle, puis on réaffiche
boutonNoir.addEventListener("click", function () {
    couleurActuelle = "black";
    afficherCheveux();
});

// Au clic sur la pastille blonde : on change la couleur actuelle, puis on réaffiche
boutonBlond.addEventListener("click", function () {
    couleurActuelle = "blond";
    afficherCheveux();
});

// Au clic sur la pastille turquoise : on change la couleur actuelle, puis on réaffiche
boutonTurquoise.addEventListener("click", function () {
    couleurActuelle = "turquoise";
    afficherCheveux();
});
