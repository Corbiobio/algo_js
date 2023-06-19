// let arr = [54, 12, 32, 56, 98889, -45, 56, -1000, -5, 21]

// function second_plus_petit(arr) {
//     let premier = arr[0]
//     let second = arr[1]
//     let tmp
//     if (premier > second) {
//         tmp = premier
//         premier = second
//         second = tmp
//     }

//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] < premier) {
//             tmp = premier
//             premier = arr[i]
//             second = tmp
//         } else if (arr[i] < second) {
//             second = arr[i]
//         }
//     }
//     return "premier : " + premier + " second : " + second
// }
// console.log(second_plus_petit(arr));