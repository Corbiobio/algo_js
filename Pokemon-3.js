// const pokemons = ['Herbe:28', 'Herbe:39', 'Herbe:41', 'Eau:10', 'Glace:33', 'Feu:29', 'Feu:40', 'Eau:32', 'Feu:41', 'Feu:43', 'Insecte:74', 'Herbe:49', 'Poison:51', 'Feu:25', 'Herbe:48', 'Feu:23', 'Herbe:27', 'Eau:11', 'Psychique:35', 'Herbe:30', 'Poison:64', 'Feu:47', 'Eau:19', 'Air:86', 'Eau:42', 'Poison:76', 'Air:59', 'Feu:12', 'Glace:80', 'Feu:41', 'Eau:34', 'Poison:61', 'Feu:15', 'Feu:42', 'Air:57', 'Eau:46', 'Glace:32', 'Herbe:42', 'Glace:50', 'Feu:41', 'Herbe:50', 'Air:55', 'Eau:33', 'Herbe:20', 'Herbe:10'];



// function Equipe(pokemons) {
//     let PuissanceEau = 0
//     let PuissanceFeu = 0
//     let PuissanceHerbe = 0
//     let PuissanceRare = 0

//     let eau_used
//     let feu_used
//     let herbe_used
//     let rare_used

//     for (let i = 0; i < pokemons.length; i++) {

//         if (pokemons[i].includes("Eau")) {
//             if (pokemons[i].slice(4) > PuissanceEau) {
//                 PuissanceEau = parseInt(pokemons[i].slice(4), 10)
//                 eau_used = pokemons[i]
//             }
//         } else if (pokemons[i].includes("Feu")) {
//             if (pokemons[i].slice(4) > PuissanceFeu) {
//                 PuissanceFeu = parseInt(pokemons[i].slice(4), 10)
//                 feu_used = pokemons[i]
//             }
//         } else if (pokemons[i].includes("Herbe")) {
//             if (pokemons[i].slice(6) > PuissanceHerbe) {
//                 PuissanceHerbe = parseInt(pokemons[i].slice(6), 10)
//                 herbe_used = pokemons[i]
//             }
//         } else {
//             if (pokemons[i].slice(pokemons[i].lastIndexOf(":") + 1) > PuissanceRare) {
//                 PuissanceRare = parseInt(pokemons[i].slice(pokemons[i].lastIndexOf(":") + 1), 10)
//                 rare_used = pokemons[i]
//             }
//         }
//     }

//     pokemons.splice(pokemons.indexOf(eau_used), 1)
//     pokemons.splice(pokemons.indexOf(feu_used), 1)
//     pokemons.splice(pokemons.indexOf(herbe_used), 1)
//     pokemons.splice(pokemons.indexOf(rare_used), 1)

//     console.log(eau_used);
//     console.log(feu_used);
//     console.log(herbe_used);
//     console.log(rare_used);

//     return [PuissanceEau + PuissanceFeu + PuissanceHerbe + PuissanceRare, pokemons]
// }

// function Puissance(pokemons) {

//     console.log(pokemons);

//     let Equipe1 = Equipe(pokemons)

//     console.log(Equipe1);

//     let Equipe2 = Equipe(Equipe1[1])

//     console.log(Equipe2);

//     let Equipe3 = Equipe(Equipe2[1])

//     console.log(Equipe3);

//     return Equipe1[0] + Equipe2[0] + Equipe3[0]
// }


// console.log(Puissance(pokemons));