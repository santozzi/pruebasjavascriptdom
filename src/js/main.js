import {CardEntity} from './models/entities/cardEntity.js';
import {renderCard} from './components/Tarjeta.js';
import { getCards, getCard } from './models/cardModel.js';


const renderTarjetas = async () => {
    const tarjetas = await getCards();
   
    
    tarjetas.forEach(tarjeta => {
    const card = new CardEntity(tarjeta.id, tarjeta.titulo, tarjeta.imagen, tarjeta.detalle);
    const seccionTarjetas = document.getElementById('tarjetas');
    seccionTarjetas.innerHTML += renderCard(card);
}


//Modal
/*
 Crear un div con fondo transparente y oscuro que ocupe toda la pantalla
 poner la tarjeta seleccionada en el centro de la pantalla y en grande con mas datos
 al hacer click en el fondo transparente, cerrar el modal
 */

)
};
async function modal(id) {
    console.log("id",id);
    
    const tarjeta = await getCard(id);
            console.log("tarjeta",tarjeta);
            
            const modal = document.getElementById('modal');
            modal.style.display = 'flex';
            modal.innerHTML = renderCard(  new CardEntity(tarjeta.id, tarjeta.titulo, tarjeta.imagen, tarjeta.detalle));
           
    console.log("tarjeta",tarjeta);    
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

const cerrar = document.getElementById('modal');
cerrar.addEventListener('click', () => {
    cerrarModal();
});

const lightMode = document.getElementById('lightmode');

lightMode.addEventListener('click', () => {
    const link = document.getElementById('estilos');

    if(lightMode.checked) {
        link.setAttribute("href", "./src/css/styles_dark.css");
    }else{
        link.setAttribute("href", "./src/css/styles.css");
    }
    
});

renderTarjetas().then(() => {
    console.log('Tarjetas renderizadas');
    const tarjetas2 = document.querySelectorAll('.tarjeta');
    tarjetas2.forEach(tarjeta => {
        tarjeta.addEventListener('click',async () => {
            const id = tarjeta.id;
            await modal(id);
        });
        
    });
}
);
