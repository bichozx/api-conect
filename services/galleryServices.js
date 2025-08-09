const apiKey= `SwBO_HxdvVdwFRdxHuXxyKwiuM7T5CNhoPi4-hz-uS0`
let BASE_URL = `https://api.unsplash.com/photos?per_page=10&client_id=${apiKey}`


export async function gallery() {
  try {
    const response = await fetch(`${BASE_URL}`);
  
    if (!response.ok) throw new Error('galeria no encontrada');
    const data = await response.json();
    
    return data
  } catch (error) {
    console.error('Error Services', error.message);
    throw error
  }
}