// let steps = "_S_SHHSS_H__HEHHHS_"



// function fight(steps) {
//     let life = 100
//     let time = 0

//     function verif_life(life) {
//         if (life > 100) {
//             return 100
//         } else if (life <= 0) {
//             time += 300
//             return 100
//         } else {
//             return life
//         }
//     }

//     for (let i = 0; i < steps.length; i++) {
//         console.log(steps[i]);
//         console.log(life);
//         console.log("time " + time);

//         if (steps[i] === "_") {
//             life += 5
//             time += 10
//         } else if (steps[i] === "S") {
//             life -= 10
//             time += 10
//         } else if (steps[i] === "H") {
//             life -= 25
//             time += 30
//         } else if (steps[i] === "T") {
//             life -= 50
//             time += 120
//         } else {
//             life -= 100
//             // time -= 60
//         }
//         life = verif_life(life)
//     }

//     let time_sec = time % 60
//     let time_min = (time - time_sec) / 60

//     return `${time_min}min_${time_sec}sec_${life}hp`
// }

// console.log(fight(steps));