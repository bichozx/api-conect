import { searcherPokemon } from '../services/pokemonServices.js';

const pokeForm = document.getElementById('pokeForm');
const pokInput = document.getElementById('pokInput');
const viewPoke = document.getElementById('viewPoke');

pokeForm.addEventListener('submit', async(e)=>{
  e.preventDefault();
  const name = pokInput.value.trim();
  if(!name) return

  viewPoke.innerHtml = '<p>🔍 SEARCHING......</p>';

  try {
    const data = await searcherPokemon(name)

    const { abilities, sprites, height, weight } = data;
    const habilidades = abilities.map(hab => hab.ability.name).join(',')

  viewPoke.innerHTML = `
       <div class="pokemon-card">
        <div class="pokemon-inner">
          <div class="pokemon-front">
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${sprites.front_default}" alt="${data.name}">
          </div>
          <div class="pokemon-back">
            <p><strong>Altura:</strong> ${(height / 10).toFixed(1)} m</p>
            <p><strong>Peso:</strong> ${(weight / 10).toFixed(1)} kg</p>
            <p><strong>Habilidades:</strong> ${habilidades}</p>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
     viewPoke.innerHTML = `<p style="color:red;">No se encontró el Pokémon "${name}"</p>`;
  }
})