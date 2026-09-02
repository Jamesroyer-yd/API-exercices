// // 
// EXERCICES - Contacter une API 
// // Vous devez contacter l'api pokemon : https://pokeapi.co/ pour afficher les 20 premiers pokemon.

async function display20pkm() {
    const reponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const donnees = await reponse.json();
    donnees.results.forEach(pokemon => console.log(pokemon.name));
    console.log(donnees.results[0].url);
    const urlAPI = await fetch(donnees.results[0].url);
    const tabpkm = await urlAPI.json();
    console.log(tabpkm.sprites.front_default;
    )
}

display20pkm();