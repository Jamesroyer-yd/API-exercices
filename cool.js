// //
// EXERCICES - Contacter une API
// // Vous devez contacter l'api pokemon : https://pokeapi.co/ pour afficher les 20 premiers pokemon.

async function display20pkm() {
    const reponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const donnees = await reponse.json();

    for (const pokemon of donnees.results) {
        const urlAPI = await fetch(pokemon.url);
        const tabpkm = await urlAPI.json();

        const carte = document.createElement("div");

        const image = document.createElement("img");
        image.src = tabpkm.sprites.front_default;
        image.alt = pokemon.name;
        carte.appendChild(image);

        const nom = document.createElement("p");
        nom.textContent = pokemon.name;
        carte.appendChild(nom);

        document.body.appendChild(carte);
    }
}

display20pkm();
