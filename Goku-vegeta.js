// const sangoku = { HP: 13000, F: 167, S: 544 }
// const vegeta = { HP: 13000, F: 149, S: 444 }




// function battle(sangoku, vegeta) {


//     let nbrdetour = 0
//     let hpG = 0
//     let hpV = 0

//     let SG = 0
//     let SV = 0
//     while (sangoku.HP > 0 && vegeta.HP > 0) {

//         if (hpV >= 1000 && hpG >= 1000) {
//             sangoku.HP -= vegeta.S
//             hpV = 0
//             SV++

//             console.log("coups special vegeta");
//             // vegeta.HP -= sangoku.S
//             // hpG = 0
//             // SG++
//         } else if (hpV >= 1000) {
//             console.log("coups special vegeta");

//             sangoku.HP -= vegeta.S
//             hpV = 0
//             SV++
//         } else if (hpG >= 1000) {
//             console.log("coups special goku");

//             vegeta.HP -= sangoku.S
//             hpG = 0
//             SG++
//         } else {

//             sangoku.HP -= vegeta.F
//             vegeta.HP -= sangoku.F

//             hpG += vegeta.F
//             hpV += sangoku.F
//         }


//         console.log("S " + sangoku.HP + " --- " + "V " + vegeta.HP);
//         // console.log("g" + SG + " - v" + SV);
//         nbrdetour++

//         if (sangoku.HP <= 0 && vegeta.HP <= 0) {
//             return `DRAW_${nbrdetour}`
//         } else if (sangoku.HP <= 0) {
//             return `VEGETA_${nbrdetour}_${SV}`
//         } else if (vegeta.HP <= 0) {
//             return `SANGOKU_${nbrdetour}_${SG}`
//         }
//     }
// }

// console.log(battle(sangoku, vegeta)); 