//16 
// function is_prime(num) {
//     if (num <= 1) {
//         return false
//     }
//     let divisible = true
//     let i = 2
//     while (i !== num) {
//         if (Number.isInteger(num / i) && num / i !== 1) {
//             divisible = false
//         }
//         i++
//     }
//     return divisible
// }
// console.log(is_prime(7));

//17
// let num = 756564
// function sum_of_each_digits(num) {
//     let total = 0
//     while (num > 10) {
//         total += num % 10
//         num = Math.floor(num / 10)
//         console.log(num);
//     }
//     total += num % 10
//     console.log(total);
// }
// console.log(sum_of_each_digits(num));

//18
// function is_prime(num) {
//     if (num <= 1) {
//         return false
//     }
//     let divisible = true
//     let i = 2
//     while (i !== num) {
//         if (Number.isInteger(num / i) && num / i !== 1) {
//             divisible = false
//         }
//         i++
//     }
//     return divisible
// }

// function request_num_of_prime(num_of_prime) {
//     let prime = []
//     let i = 0
//     while (prime.length < num_of_prime) {
//         if (is_prime(i)) {
//             prime.push(i)
//         }
//         i++
//     }
//     return prime
// }
// console.log(request_num_of_prime(50));

//19
// function is_prime(num) {
//     if (num <= 1) {
//         return false
//     }
//     let divisible = true
//     let i = 2
//     while (i !== num) {
//         if (Number.isInteger(num / i) && num / i !== 1) {
//             divisible = false
//         }
//         i++
//     }
//     return divisible
// }
// function prime_upper_n(n) {
//     let current_num = n + 1
//     while (!is_prime(current_num)) {

//         current_num++
//     }

//     return current_num
// }
// console.log(prime_upper_n(56156));


//20
//??????

//21
//??????

//22
// let current_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let new_array = []

// for (let i = current_array.length - 1; i >= 0; i--) {
//     new_array.push(current_array[i])
// }
// console.log(new_array);

//23
// let current_string = "abcdefghijklmnopqrstuvwxyz"
// let new_string = ""

// for (let i = current_string.length - 1; i >= 0; i--) {
//     new_string += current_string[i]
// }
// console.log(new_string);

//24
// let first_array = [1, 2, 3, 4, 5]
// let second_array = [100, 99, 98, 97, 96]
// function merge_two_array(first_array, second_array) {
//     let new_array = []
//     for (let i = 0; i < first_array.length; i++) {
//         new_array.push(first_array[i])
//         new_array.push(second_array[i])
//     }
//     return new_array
// }
// console.log(merge_two_array(first_array, second_array));

//25
// let first_array = [1, 2, 100, 5, 6]
// let second_array = [100, 1, 98, 2, 2]

// function merge_two_array(first_array, second_array) {
//     let new_array = first_array

//     for (let i = 0; i < new_array.length; i++) {
//         for (let j = 0; j < second_array.length; j++) {
//             if (new_array[i] === second_array[j]) {
//                 second_array.splice(j, 1)
//                 j--
//             }
//         }
//     }
//     new_array.push(...second_array)
//     return new_array
// }

// console.log(merge_two_array(first_array, second_array));

//26
// let first_array = ["1", "2", "100", "5", "6"]
// let second_array = ["100", "1", "98", "2", "2"]

// function merge_two_array(first_array, second_array) {
//     let new_array = first_array

//     for (let i = 0; i < new_array.length; i++) {
//         for (let j = 0; j < second_array.length; j++) {
//             if (new_array[i] === second_array[j]) {
//                 second_array.splice(j, 1)
//                 j--
//             }
//         }
//     }
//     new_array.push(...second_array)
//     return new_array
// }

// console.log(merge_two_array(first_array, second_array));
