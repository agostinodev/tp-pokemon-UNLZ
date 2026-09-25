
export const renderCard = (pokemon) => {

    return `
        <div class="card col" style="width: 18rem;">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
            <div class="card-body">
                <span class="card-id">#${String(pokemon.id).padStart(3,0)}</span>
                <h5 class="card-title text-capitalize mt-3 mb-3">${pokemon.name}</h5>
                <div>
                    ${pokemon.types.map( p => `<span class="type-pokemon type-${p.type.name}  text-capitalize">${p.type.name}</span>`).join(" / ")}
                </div>
                <div class="card-desc">
                    <p>Altura: ${pokemon.height/ 10}m</p>
                    <p>Peso: ${pokemon.weight/ 10}kg</p>
                </div>
            </div>
        </div>`;
}



export const renderCards = (pokemons) => {
   
    return pokemons.map(p => renderCard(p)).join("");

}

