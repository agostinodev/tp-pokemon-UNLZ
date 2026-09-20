
export const renderCard = (pokemon) => {

    return `
        <div class="card col" style="width: 18rem;">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
            <div class="card-body">
                <span>#${pokemon.id}</span>
                <h5 class="card-title text-capitalize">${pokemon.name}</h5>
                <div>
                    ${pokemon.types.map( p => `<span class="text-capitalize">${p.type.name}</span>`).join(" / ")}
                </div>
            </div>
        </div>`;
}



export const renderCards = (pokemons) => {
   
    return pokemons.map(p => renderCard(p)).join("");

}

