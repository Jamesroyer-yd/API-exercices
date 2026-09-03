// Fonction asynchrone (permet d'utiliser "await" à l'intérieur)
async function showFive() {
    // On essaie ce bloc de code, s'il y a une erreur elle sera attrapée par "catch"
    try {
    // On envoie une requête à l'API et on attend sa réponse
    const reponse = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    // On transforme la réponse en objet JavaScript utilisable (JSON)
    const donnee = await reponse.json();

    // Tableau vide qui va contenir les titres récupérés
    const titres = [];
    // On récupère l'élément <ul> du HTML dans lequel on va ajouter les titres
    const conteneurListe = document.body.querySelector("#importTitle");

    // On parcourt chaque tâche reçue de l'API une par une
    donnee.forEach(tache => {
        // On ajoute le titre de la tâche dans le tableau "titres"
        titres.push(tache.title);

        // On crée un nouvel élément <li> (ligne de liste)
        const inject = document.createElement("li");
        // On met le titre de la tâche comme texte de ce <li>
        inject.textContent = tache.title;
        // On ajoute ce <li> dans le <ul> affiché à l'écran
        conteneurListe.appendChild(inject);
    });
    // Petit message pour vérifier que tout fonctionne dans la console
    console.log("Salut");
    // On affiche le tableau des titres dans la console
    console.log(titres);

    // Si une erreur s'est produite dans le "try", on arrive ici
    } catch (error) {
        // On affiche une alerte pour prévenir l'utilisateur qu'il y a eu un problème
        alert("Une erreur est survenue", error);
    }
}

// On appelle la fonction pour lancer tout le processus
showFive();
