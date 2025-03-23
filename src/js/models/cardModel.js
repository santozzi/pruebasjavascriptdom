//crud
import { tarjetas } from "../mocks/cards.js";

export const getCards = async () => {
    const cards = await tarjetas();
    return cards;
};
export const getCard = async (id) => {
    const card = await tarjetas();
    return  card.find(card => card.id == id);
};