// https://codeguppy.com/site/download/50_coding_challenges.pdf
// ressource

//1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 2
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
// }

//3
// for (let i = 0; i <= 10; i++) {
//     console.log(i * 7);
// }

//4
// for (let i = 1; i <= 10; i++) {
//     console.log(`table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i * j);
//     }
// }

//5
// let total = 0
// for (let i = 0; i <= 10; i++) {
//     console.log(total += i);
// }

// 6
// let total = 1
// for (let i = 1; i <= 10; i++) {
//     total = total * i
//     console.log(total);
// }


// 7
// let total = 0
// for (let i = 10; i <= 30; i += 2) {
//     total += i
//     console.log(total);
// }

//8
// let celsius = 504
// console.log(32 + (celsius * 1.8));

//9
// let fahrenheit = 500
// console.log((fahrenheit - 32) * 5 / 9);

//10
// let array = [50, 42, 2, 9, 4, 3, 7, 575, 5, 645, 42]
// let total = 0
// for (let i = 0; i < array.length; i++) {
//     total += array[i]
// }
// console.log(total);

// 11
// let num = [50, 10, 2, 4]
// let total = 0
// for (let i = 0; i < num.length; i++) {
//     total += num[i]
// }
// console.log(total / num.length);

//12
// function positive_num(arr_num) {
//     let positive_num = []
//     for (let i = 0; i < arr_num.length; i++) {
//         if (arr_num[i] > 0) {
//             positive_num.push(arr_num[i])
//         }
//     }
//     console.log(positive_num);
// }
// let num = [50, -5, -2, 75, -0, -6054]
// positive_num(num)

//13
// let num = [50, , 860 - 5, 7800, -2, 75, -0, -6054]
// let max = 0
// for (let i = 0; i < num.length; i++) {
//     if (num[i] > max) {
//         max = num[i]
//     }
// }
// console.log(max);

//14
// let fibonacci = 1
// let last_fibonacci = 0

// for (let i = 1; i < 10; i++) {
//     let temp = fibonacci
//     fibonacci += last_fibonacci

//     last_fibonacci = temp
//     console.log(fibonacci);
// }

//15
// function fibonacci(num_to_reach) {
//     let fibonacci = 1
//     let last_fibonacci = 0

//     for (let i = 1; i < num_to_reach; i++) {
//         let temp = fibonacci
//         fibonacci += last_fibonacci

//         last_fibonacci = temp
//     }
//     console.log(fibonacci);
// }
// fibonacci(8)