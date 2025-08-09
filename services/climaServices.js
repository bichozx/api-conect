const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const key= 'b98845cdf2a66c5e0119b0cc26b73610';
export async function obtenerClima(ciudad) {
  try {
    const response = await fetch(`${BASE_URL}?q=${ciudad}&appid=${key}&units=metric&lang=es`);
    
    if (!response.ok) throw new Error('Error al obtener el clima');
    const data = await response.json()
    return data;
  } catch (error) {
     console.error('Error en climaService:', error.message);
    throw error;
  }
}