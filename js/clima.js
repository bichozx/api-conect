import { obtenerClima } from '../services/climaServices.js';

const form = document.getElementById('climaForm')
const input= document.getElementById('ciudad')

const resultadoClima= document.getElementById('resultadoClima')

form.addEventListener('submit', async(e)=>{
  e.preventDefault();
  const ciudad = input.value.trim();
  
  if(!ciudad) return;

  try {
  const data = await obtenerClima(ciudad);
 
  const icono = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

 resultadoClima.innerHTML=`
   <h2>${data.name}, ${data.sys.country}</h2>
      <p><img src="${icono}" alt="Clima"> ${data.weather[0].description}</p>
      <p>🌡️ Temperatura: ${data.main.temp}°C</p>
      <p>💧 Humedad: ${data.main.humidity}%</p>
`;
 

} catch (error) {
   resultadoClima.innerHTML = `<p style="color:red;">No se pudo obtener el clima de "${ciudad}"</p>`;
}
})

