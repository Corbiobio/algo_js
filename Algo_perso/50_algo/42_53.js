//42 
// function circle_interstection(circle1, circle2) {
//     function distance_between_two_points(cooronate1, cooronate2) {
//         return Math.sqrt(Math.pow(cooronate2[0] - cooronate1[0], 2) + Math.pow(cooronate2[1] - cooronate1[1], 2))
//     }
//     let distance_between_cirlces = distance_between_two_points([circle1.x, circle1.y], [circle2.x, circle2.y])
//     console.log(distance_between_cirlces);
//     if (circle1.radius + circle2.radius >= distance_between_cirlces) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(circle_interstection({ x: 3, y: 4, radius: 3 }, { x: 6, y: 2, radius: 1 }));
// console.log(circle_interstection({ x: 200, y: 200, radius: 100 }, { x: 300, y: 300, radius: 50 }));

//43
// function choose_arr_want_in_arr(arr, index) {
//     return arr[index]
// }
// console.log(choose_arr_want_in_arr([[4564, 444], [648456, 456], ["sefs", "a"], [56, 'esf']], 3));

//44
// var bin = "11111110";
// function string_to_binary_num(num) {
//     return parseInt(num, 2)
// }
// console.log(string_to_binary_num(bin));

//45
// function sum_all_num_arr_jagged(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             total += arr[i][j]
//         }
//     }
//     return total
// }
// let array = [[566, 56, 5], [1, 3], [45, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1000]]
// console.log(sum_all_num_arr_jagged(array));

//46
// function higher_num_in_arr_jagged(arr) {
//     let higher_num = 0
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (higher_num < arr[i][j]) {
//                 higher_num = arr[i][j]
//             }
//         }
//     }
//     return higher_num
// }
// let array = [[1566, 222256, 5], [1, 3], [45, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1000]]
// console.log(higher_num_in_arr_jagged(array));

//47
// let array = [56, 2, 1, [55, 3, [5646, 5, [564564, [45456]]], 0], [["test"], 564, 2, 8, 7, 9, [["test"]]], 2, 5, [565656]]
// function flatten_array(arr) {
//     let arr_in = false
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             arr_in = true
//             arr = arr.flat()
//         }
//     }
//     return arr
// }
// console.log(flatten_array(array));

//48
// let string = "je vais manger des madeleine"
// function bigest_word(sentence) {
//     sentence = sentence.split(" ")
//     let bigest_word = ""
//     sentence.forEach(element => {
//         if (bigest_word.length < element.length) {
//             bigest_word = element
//         }
//     })
//     return bigest_word
// }
// console.log(bigest_word(string))

//49
// function shuffle_string(arr) {
//     let new_arr = [arr[0]]

//     for (let i = 1; i < arr.length; i++) {
//         let random = Math.floor(Math.random() * (new_arr.length + 1))
//         new_arr.splice(random, 0, arr[i])
//     }
//     return new_arr
// }
// let arr = ["the", "fox", "say", "ny", "ny", "ny", "ny", "ny"]
// console.log(shuffle_string(arr));


//50
// function shuffle_arr_with_n(n) {
//     let new_arr = []

//     for (let i = 1; i <= n; i++) {
//         let random = Math.floor(Math.random() * (new_arr.length + 1))
//         new_arr.splice(random, 0, i)
//     }
//     return new_arr
// }
// console.log(shuffle_arr_with_n(50));


//51
// let string = "jjjj e eeeee   j   z   zazdqsd qskppoopizrpozeeriopztupieortpiouhjkxcwjhvwcss  sss ssssss ss sssss ssss"

// function frequency_letter_in_sentence(sentence) {
//     let letter_frequency = {}
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] !== " ") {
//             if (!letter_frequency[sentence[i]]) {
//                 letter_frequency[sentence[i]] = 1
//             } else {
//                 letter_frequency[sentence[i]]++
//             }
//         }
//     }
//     return letter_frequency
// }
// console.log(frequency_letter_in_sentence(string));

//52
// function fibonacci(num_to_reach) {
//     let fibonacci = 1
//     let last_fibonacci = 0

//     for (let i = 1; i <= num_to_reach; i++) {
//         let temp = fibonacci
//         fibonacci += last_fibonacci

//         last_fibonacci = temp
//         console.log(fibonacci);
//     }
// }
// fibonacci(500)

//53
// let total = 1
// for (let i = 1; i <= 70; i++) {
//     total = total * i
//     console.log(total);
// }