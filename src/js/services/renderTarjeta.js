export const renderCard = (card) =>

`<div class="tarjeta" id="${card.id}">
<img src="${card.image}" alt="${card.titulo}">

<div class="datos">
    <div class="titulo">
        ${card.titulo}
    </div>
    <div class="detalle">
        <p>${card.detalle}</p>
    </div>
</div>
</div>`;