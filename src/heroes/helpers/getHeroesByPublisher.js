import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    // Un listado de editoriales soportadas
    const PUBLISHERS = ['DC Comics', 'Marvel Comics'];
    // Si la editorial no existe lanzamos un error
    if (!PUBLISHERS.includes(publisher)) throw new Error(`${publisher} no es una editorial válida`);

    // Filtramos los comics por la editorial seleccionada
    return heroes.filter(heroe => heroe.publisher === publisher);
}