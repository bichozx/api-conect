import { gallery } from '../services/galleryServices.js';

const data =await gallery();


function pintarDatos(datos) {
    let fila = document.getElementById("fila");
    fila.innerHTML = ""; 

    datos.forEach(function(foto) {
        
        let columna = document.createElement("div");
        
        columna.classList.add("col");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100");

        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src = foto.urls.regular

        let titulo = document.createElement("h5");
        titulo.classList.add("card-title", "p-2");
        titulo.textContent = foto.user.name;

        
        let descripcion = document.createElement("p");
        descripcion.classList.add("card-text", "px-2", "pb-2", "text-muted");
        descripcion.textContent = foto.alt_description
;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);

        columna.appendChild(tarjeta);

        fila.appendChild(columna);
    });
}

// pintamos solo las primeras 10 fotos
pintarDatos(data.slice(0, 10));