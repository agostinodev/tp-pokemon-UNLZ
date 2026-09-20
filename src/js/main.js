import { getPokemon, getPokemons} from './services/pokemonsService.js';
import { showSpinner, hideSpinner } from './components/renderSpinner.js';
import { renderCards, renderCard } from './components/renderCards.js';

const $inputSearch = document.querySelector('#input-search');
const $btnSearch = document.querySelector('#btn-search');
const $containerCards = document.querySelector('#container-cards');
const $btnClean = document.querySelector('#btn-clean');

const loadData = async(getData, render) =>{
    try {        
        $containerCards.innerHTML = '';
        showSpinner();
        const data = await getData();
        $containerCards.innerHTML = render(data);
    } catch (error) {
        Swal.fire({
            text: `${error.message}`,
            icon: "error"
        });
    }finally{
        hideSpinner();
    }
}

const initApp = () =>{
    loadData(getPokemons, renderCards);
}

const renderPokemon = (name) =>{
    loadData(() => getPokemon(name), renderCard);
}

$btnSearch.addEventListener('click', () => {
    const input = $inputSearch.value;
    renderPokemon(input);
    $inputSearch.value = '';
})

$btnClean.addEventListener('click', initApp);

initApp();