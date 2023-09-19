// const cours = ['TTETEEE', 'EEPTETP', 'TEEEPEE', 'TTEPEPE', 'EETEEEE', 'TDPEEEP', 'TEPETET', 'PEPTETT', 'TTTETEE', 'EEEETTT', 'PETTPPP', 'ETPTTTE', 'TEDETTE', 'ETETEPD', 'PTPEETT', 'TPEPPTE', 'TTEETTD', 'TTEEETT', 'TTEEETT'];

// function notation(cours) {
//     let eleves = {
//     }

//     for (let i = 0; i < cours[0].length; i++) {
//         eleves["eleve" + (i)] = {
//             note: 12,
//             note_max: 20
//         }
//     }

//     for (let i = 0; i < cours.length; i++) {
//         for (let j = 0; j < cours[i].length; j++) {

//             if (eleves["eleve" + [j]].note < eleves["eleve" + [j]].note_max) {
//                 if (cours[i][j] === "E") {
//                     eleves["eleve" + [j]].note++
//                 } else if (cours[i][j] === "T") {
//                     eleves["eleve" + [j]].note++
//                 }
//             }

//             if (cours[i][j] === "P") {
//                 eleves["eleve" + [j]].note--
//                 eleves["eleve" + [j]].note_max--
//             } else if (cours[i][j] === "D") {
//                 eleves["eleve" + [j]].note -= 2
//                 eleves["eleve" + [j]].note_max -= 2
//             }
//         }
//     }

//     let total = 0
//     let num_of_key = 0
//     for (const key in eleves) {
//         total += eleves[key].note
//         num_of_key++
//     }
//     return Number.parseFloat(total / num_of_key).toFixed(1)
// }
// console.log(notation(cours));