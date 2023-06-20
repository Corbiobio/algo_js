// const nombres = [4, 8, 15, 16, 23, 42];
// const codes = ['2 6 + 2 2 1 - 4', '4 1 3 - 6 4', '4 4 + 6 2 2 2', '5 2 2 4 + 1', '6 2 + 1 5 - 5', '6 4 5 - 4 2 + 5', '5 6 + 5 4 - 5 3', '2 4 - 5 2 4 2', '6 4 3 - 6 3 5'];

// function decoder(nombres, codes) {
//     for (let i = 0; i < codes.length; i++) {
//         codes[i] = codes[i].split(' ').join('')
//     }
//     let result = 0

//     for (let i = 0; i < codes.length; i++) {
//         let operation = []

//         for (let j = 0; j < codes[i].length; j++) {
//             if (codes[i][j + 1] === "-") {
//                 operation.push(nombres[codes[i][j] - 1] - nombres[codes[i][j + 2] - 1])
//                 j += 2
//             } else if (codes[i][j + 1] === "+") {
//                 operation.push(nombres[codes[i][j] - 1] + nombres[codes[i][j + 2] - 1])
//                 j += 2
//             } else {
//                 operation.push(nombres[codes[i][j] - 1])
//             }
//         }
//         let result_tmp = 1
//         for (let j = 0; j < operation.length; j++) {
//             result_tmp *= operation[j]
//         }
//         result += result_tmp
//     }
//     return result
// }
// console.log(decoder(nombres, codes));