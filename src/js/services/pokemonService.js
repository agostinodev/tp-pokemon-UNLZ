

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";


export const getPokemons = async () => {

    const res = await fetch(`${BASE_URL}/`);

    if(!res.ok) throw new Error("No se puede obtener pokemon");

    return await res.json();

}