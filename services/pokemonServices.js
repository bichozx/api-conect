let BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'


export async function searcherPokemon(nombre) {
  try {
    const response = await fetch(`${BASE_URL}${nombre.toLowerCase()}`);
  
    if (!response.ok) throw new Error('Pokémon no encontrado');
    const data = await response.json();
    
    return data
  } catch (error) {
    console.error('Error en pokemonServices', error.message);
    throw error
  }
}