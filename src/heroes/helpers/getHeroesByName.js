import { heroes } from "../data/heroes";

export const getHeroesByName = (name) => {
    // Limpiar el nombre y retornar un arreglo vacío en caso de que se mande un valor vacío
    name = name.toLowerCase().trim();
    if (!name) return [];
    
    // Filtrar heroes por nombre
    return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(name))
}