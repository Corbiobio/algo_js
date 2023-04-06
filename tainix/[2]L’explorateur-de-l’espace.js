// let planetes = ['XVM004:grottes 81:montagnes 21', 'JQT558:lacs 88:forets 68:canyons 23:plaines 57:deserts 65:montagnes 36', 'NBF818:volcans 16:canyons 47:montagnes 50:lacs 58:deserts 97:jungles 37', 'HAV703:grottes 88:canyons 28:jungles 66:champs 15', 'IMR452:forets 12:canyons 42:champs 88:jungles 12', 'VLY926:grottes 85:deserts 20:forets 62', 'BQP660:mers 26:marais 68:deserts 89:champs 57', 'UIN045:jungles 84:montagnes 33', 'APM132:grottes 82:canyons 35:jungles 14', 'AJS670:lacs 43:marais 100:mers 18', 'PTN777:grottes 78:deserts 75:champs 48:montagnes 70:forets 29:plaines 96', 'KRS702:montagnes 65:jungles 91:deserts 31:champs 30', 'KET534:grottes 11:champs 62:marais 46:mers 73', 'IIA310:grottes 26:volcans 77', 'MFU234:champs 62:montagnes 48:marais 75:grottes 54', 'BVF595:lacs 36:mers 51:deserts 86:plaines 36:grottes 30', 'NMZ271:forets 11:grottes 100', 'AGO595:lacs 87:volcans 99:champs 41:mers 66', 'FVA862:grottes 60:canyons 42:champs 62:montagnes 30:deserts 40:jungles 94', 'KNS802:volcans 54:lacs 44:canyons 62', 'IAM082:plaines 96:grottes 85:lacs 12:mers 52'];
// let scores = ["volcans 4", "champs 8", "montagnes 6", "mers 10"]

// function recherche(planetes, scores) {
//     let biome_recherche = []
//     let biome_value = []
//     for (let i = 0; i < scores.length; i++) {
//         biome_recherche.push(scores[i].substring(0, scores[i].indexOf(" ")))
//         biome_value.push(parseInt(scores[i].substring(scores[i].indexOf(" "), scores[i].length)))
//     }
//     // console.log(biome_recherche);console.log(biome_value);
//     let planete_score_total = 0
//     for (let i = 0; i < planetes.length; i++) {
//         let planete_score = 0
//         for (let j = 0; j < biome_recherche.length; j++) {
//             if (planetes[i].indexOf(biome_recherche[j]) !== -1) {
//                 let biome_recherche_position = planetes[i].indexOf(biome_recherche[j]) + biome_recherche[j].length + 1
//                 let planete_score_temp = parseInt(planetes[i].substring(biome_recherche_position, biome_recherche_position + 2))
//                 planete_score += planete_score_temp * biome_value[j]
//                 // console.log(planetes[i]);console.log(planete_score);console.log(planete_score_temp);console.log(biome_value[j]);
//             }
//         }
//         if (planete_score > planete_score_total) {
//             planete_score_total = planete_score
//         }
//     }
//     if (planete_score_total > 0) {
//         return planete_score_total
//     } else {
//         return "NOPLANET"
//     }
// }

// console.log(recherche(planetes, scores));