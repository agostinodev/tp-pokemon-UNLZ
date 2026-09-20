

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";


export const getPokemons = async () => {

    const pokemons = [];

    for (let i = 1; i <= 24; i++) {
        
        const res = await fetch(`${BASE_URL}${i}`);

        if(!res.ok) throw new Error("No se pueden obtener pokemons");

        pokemons.push(await res.json());
        
    }

    return pokemons;

}

export const getPokemon = async (endpoint = '') => {

    const res = await fetch(`${BASE_URL}${endpoint}`);

    if(!res.ok) throw new Error("No se puede obtener pokemon");

    return await res.json();

};