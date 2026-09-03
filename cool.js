// //
// EXERCICES - Contacter une API
// // Vous devez contacter l'api pokemon : https://pokeapi.co/ pour afficher les 20 premiers pokemon.

// Déclare une fonction asynchrone (permet d'utiliser "await" à l'intérieur)
async function display20pkm() {
    // Envoie une requête à l'API Pokemon pour récupérer la liste des 20 premiers pokemon, et attend la réponse
    const reponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    // Convertit la réponse en JSON exploitable (objet contenant results, count, etc.)
    const donnees = await reponse.json();

    // Boucle sur chaque pokemon de la liste récupérée
    for (const pokemon of donnees.results) {
        // Envoie une requête vers l'URL propre à ce pokemon pour avoir ses infos détaillées (dont le sprite)
        const urlAPI = await fetch(pokemon.url);
        // Convertit cette réponse détaillée en JSON
        const tabpkm = await urlAPI.json();

        // Crée un élément <div> qui servira de carte pour afficher ce pokemon
        const carte = document.createElement("div");

        // Crée un élément <img> pour afficher l'image du pokemon
        const image = document.createElement("img");
        // Définit la source de l'image avec le sprite par défaut renvoyé par l'API
        image.src = tabpkm.sprites.front_default;
        // Définit le texte alternatif de l'image avec le nom du pokemon (accessibilité/SEO)
        image.alt = pokemon.name;
        // Ajoute l'image à l'intérieur de la carte
        carte.appendChild(image);

        // Crée un élément <p> pour afficher le nom du pokemon
        const nom = document.createElement("p");
        // Définit le texte du paragraphe avec le nom du pokemon
        nom.textContent = pokemon.name;
        // Ajoute le paragraphe à l'intérieur de la carte
        carte.appendChild(nom);

        // Ajoute la carte complète (image + nom) dans le corps de la page HTML
        document.body.appendChild(carte);
    }
}

// Appelle la fonction pour lancer l'affichage des 20 pokemon
display20pkm();
