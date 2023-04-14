// // pokemon #2

// const pokemons = ['Eau:47', 'Poison:99', 'Eau:36', 'Feu:47', 'Eau:14', 'Feu:14', 'Insecte:87', 'Glace:36', 'Eau:24', 'Herbe:13', 'Feu:31', 'Eau:35', 'Poison:26', 'Herbe:25', 'Herbe:19', 'Feu:15', 'Psychique:53', 'Glace:63', 'Glace:88', 'Herbe:44', 'Herbe:16', 'Insecte:35', 'Feu:49', 'Eau:16', 'Air:74'];
// function Puissance(pokemons) {
//     let PuissanceEau = 0
//     let PuissanceFeu = 0
//     let PuissanceHerbe = 0
//     let PuissanceAutre = 0

//     for (let i = 0; i < pokemons.length; i++) {

//         if (pokemons[i].includes("Eau")) {
//             if (pokemons[i].slice(4) > PuissanceEau) {
//                 PuissanceEau = parseInt(pokemons[i].slice(4), 10)
//             }
//         } else if (pokemons[i].includes("Feu")) {
//             if (pokemons[i].slice(4) > PuissanceFeu) {
//                 PuissanceFeu = parseInt(pokemons[i].slice(4), 10)
//             }
//         } else if (pokemons[i].includes("Herbe")) {
//             if (pokemons[i].slice(6) > PuissanceHerbe) {
//                 PuissanceHerbe = parseInt(pokemons[i].slice(6), 10)
//             }
//         } else {
//             if (pokemons[i].slice(pokemons[i].lastIndexOf(":") + 1) > PuissanceAutre) {

//                 PuissanceAutre = parseInt(pokemons[i].slice(pokemons[i].lastIndexOf(":") + 1), 10)
//             }
//         }
//     }

//     return PuissanceEau + PuissanceFeu + PuissanceHerbe + PuissanceAutre
// }


// console.log(Puissance(pokemons));