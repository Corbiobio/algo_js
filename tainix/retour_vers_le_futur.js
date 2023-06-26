// const depart = 1985;
// const anniversaire = '09-06';
// const sauts = ['1998-10-14', '2007-05-19', '1993-01-27', '1971-04-20', '2000-03-31', '2012-04-30', '1991-11-25', '2000-07-30', '2004-08-02', '1997-09-10', '1974-05-29', '1994-02-21', '1979-02-09', '1984-06-12', '1991-08-06', '1975-06-25', '2001-11-08'];

// function date_calculate(start, birth, jump) {
//     let total_years = 0
//     birth = birth.split("-").map(e => parseInt(e))

//     for (let i = 0; i < jump.length; i++) {
//         jump[i] = jump[i].split("-").map(e => parseInt(e))

//         if (jump[i][0] > start) {
//             if (jump[i][1] > birth[0]) {
//                 total_years += jump[i][0] - start
//                 console.log(jump[i][0] - start);
//             } else if (jump[i][1] === birth[0]) {
//                 if (jump[i][2] > birth[1]) {
//                     total_years += jump[i][0] - start
//                     console.log(jump[i][0] - start);
//                 } else {
//                     total_years += jump[i][0] - start - 1
//                     console.log(jump[i][0] - start - 1);
//                 }
//             } else {
//                 total_years += jump[i][0] - start - 1
//                 console.log(jump[i][0] - start - 1);
//             }
//         } else {
//             if (jump[i][1] > birth[0]) {
//                 total_years += jump[i][0] - start + 1
//                 console.log(jump[i][0] - start + 1);
//             } else if (jump[i][1] === birth[0]) {
//                 if (jump[i][2] > birth[1]) {
//                     total_years += jump[i][0] - start + 1
//                     console.log(jump[i][0] - start + 1);
//                 } else {
//                     total_years += jump[i][0] - start
//                     console.log(jump[i][0] - start);
//                 }
//             } else {
//                 total_years += jump[i][0] - start
//                 console.log(jump[i][0] - start);
//             }
//         }
//         console.log("total : " + total_years);
//     }
//     return Math.abs(total_years)
// }
// console.log(date_calculate(depart, anniversaire, sauts));
