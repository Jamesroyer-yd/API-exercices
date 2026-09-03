// Récupérer les éléments des flèches avec document.querySelector, un pour .arrowLeft, un pour .arrowRight.
const flecheGauche = document.querySelector(".arrowLeft");
const flecheDroite = document.querySelector(".arrowRight");





// Regrouper les 3 images de cheveux par couleur, dans l'ordre courte → moyenne → longue, dans une structure qui te permet d'accéder facilement à "l'image n°0, n°1, n°2" d'une couleur donnée (réfléchis à un tableau, ou un objet contenant des tableaux).

//////////
//// const cheveuxNoirs = document.querySelectorAll(".blackHair");
// const cheveuxBlonds = document.querySelectorAll(".blondHair");
// const cheveuxTurquois = document.querySelectorAll(".turquoiseHair");
// 
// const coupesCourtes = document.querySelectorAll(".coupeCourte");
// const coupesMoyennes = document.querySelectorAll(".coupeMoyenne");
// const coupesLongues = document.querySelectorAll(".coupeLongue");
//////////

const cheveux = {
    black: [
    document.querySelector(".blackHair.coupeCourte"),
    document.querySelector(".blackHair.coupeMoyenne"),
    document.querySelector(".blackHair.coupeLongue"),
    ],
    blond: [
    document.querySelector(".blondHair.coupeCourte"),
    document.querySelector(".blondHair.coupeMoyenne"),
    document.querySelector(".blondHair.coupeLongue"),
    ],
    turquoise: [
    document.querySelector(".turquoiseHair.coupeCourte"),
    document.querySelector(".turquoiseHair.coupeMoyenne"),
    document.querySelector(".turquoiseHair.coupeLongue"),
    ],
};

console.log(cheveux);

const coupesCourtes = [...document.querySelectorAll(".coupeCourte")];
const coupesMoyennes = [...document.querySelectorAll(".coupeMoyenne")];
const coupesLongues = [...document.querySelectorAll(".coupeLongue")];

console.log(coupesCourtes);

// Créer deux variables d'état : une pour savoir quelle couleur est actuellement affichée, une pour savoir quelle longueur (un index numérique, par exemple).





// Écrire une fonction qui affiche la bonne image et cache les autres, en te basant sur ces deux variables d'état (pense à l'attribut hidden que tu utilises déjà dans le HTML).







// Ajouter un addEventListener('click', ...) sur la flèche droite qui fait avancer l'index de longueur, puis rappelle ta fonction d'affichage.





// Faire pareil sur la flèche gauche, mais en reculant l'index.







// Gérer le bouclage : quand tu dépasses "longue" en avançant, tu dois revenir à "courte" (et l'inverse en reculant). Cherche du côté de l'opérateur modulo (%) pour faire ça proprement, en faisant attention aux nombres négatifs.




