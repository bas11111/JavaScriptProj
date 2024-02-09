async function getPokemonList (){
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokedex/2');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function fetchPokemonList() {
    const pokemonList = await getPokemonList();
    console.log(pokemonList);
}

pokemonList = fetchPokemonList();