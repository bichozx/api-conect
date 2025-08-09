import { gallery } from '../services/galleryServices.js';

const data =await gallery();


function pintarDatos(datos) {
    let fila = document.getElementById("fila");
    fila.innerHTML = ""; 

    datos.forEach(function(foto) {
        // columna bootstrap
        let columna = document.createElement("div");
        
        columna.classList.add("col");

        // tarjeta bootstrap
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100");

        // imagen
        let imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src = foto.urls.regular

        

        // título
        let titulo = document.createElement("h5");
        titulo.classList.add("card-title", "p-2");
        titulo.textContent = foto.user.name;

        // descripción o id
        let descripcion = document.createElement("p");
        descripcion.classList.add("card-text", "px-2", "pb-2", "text-muted");
        descripcion.textContent = foto.alt_description
;

        // ensamblar tarjeta
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);

        // ensamblar columna
        columna.appendChild(tarjeta);

        // añadir a la fila
        fila.appendChild(columna);
    });
}

// pintamos solo las primeras 10 fotos
pintarDatos(data.slice(0, 10));