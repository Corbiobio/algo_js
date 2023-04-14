// const letters = 'vu9ufkhbipe17xroxb4l6uec11gkzd06pza39fmsb5clipe17xroxb4l6ufvg0vce8l5ts17d4vkraybjn8kveg2vsdcckzmvjipe17xroxb4l6uh6tzdc26vwqkjylcbvy5arakr3txyfmottpvn1ipe17xroxb4l6u15im4cnbuzipe17xroxb4l6u37ih5jg165ntnhj46ysy9l1svqn2kv14zncw';


// function apparition(letters, num_of_length) {
//     for (let i = 0; i < letters.length; i++) {
//         let code_temp = letters.slice(i, i + num_of_length)
//         let nbr_apparition = 0
//         for (let j = 0; j < letters.length; j++) {
//             let code_comparation = letters.slice(j, j + num_of_length)
//             if (code_temp === code_comparation) {
//                 nbr_apparition++
//             }
//         }
//         if (nbr_apparition >= 4) {
//             return code_temp
//         }
//     }
// }
// function find(letters) {
//     let i = 8
//     let mdp
//     while (apparition(letters, i)) {
//         mdp = apparition(letters, i)
//         i++
//     }
//     return mdp.toUpperCase()
// }
// console.log(find(letters));