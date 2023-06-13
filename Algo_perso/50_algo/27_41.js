//27
// function array_without_duplicate_num(arr) {
//     let new_arr = [arr[0]]
//     for (let i = 1; i < arr.length; i++) {
//         let in_arr = false
//         for (let j = 0; j < new_arr.length; j++) {
//             if (new_arr[j] === arr[i]) {
//                 in_arr = true
//             }
//         }
//         if (!in_arr) {
//             new_arr.push(arr[i])
//         }
//     }
//     return new_arr
// }

// console.log(array_without_duplicate_num([5, 10, 5, 13, 10, 5, 848]));

//28
// function sum_of_n_prime(n) {
//     function is_prime(num) {
//         if (num <= 1) {
//             return false
//         }
//         let divisible = true
//         let i = 2
//         while (i !== num) {
//             if (Number.isInteger(num / i) && num / i !== 1) {
//                 divisible = false
//             }
//             i++
//         }
//         return divisible
//     }
//     function request_num_of_prime(num_of_prime) {
//         let prime = []
//         let i = 0
//         while (prime.length < num_of_prime) {
//             if (is_prime(i)) {
//                 prime.push(i)
//             }
//             i++
//         }
//         return prime
//     }
//     let list_prime = request_num_of_prime(n)
//     let total = 0
//     list_prime.forEach((element) => { total += element })

//     return total
// }
// console.log(sum_of_n_prime(100));

//29
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
// let list_prime = request_num_of_prime(100)

// console.log(list_prime[list_prime.length - 1] - list_prime[0]);

//30
// function add_num_by_string(str1, str2) {
//     return `${parseInt(str1) + parseInt(str2)}`
// }
// console.log(add_num_by_string("56446", "5555"));

//31
// let string = "sdddtr ytryry rtyrty rtyrh fdgdf ret"
// function num_of_words(sentence) {
//     return sentence.split(' ').length
// }
// console.log(num_of_words(string));

//32
// let string = "sdddtr ytryry rtyrty rtyrh fdgdf ret"

// function capitalise_each_first_letter(sentence) {
//     let words = sentence.split(' ')

//     let words_capitalise = []
//     words.forEach((element) => {
//         let word = { first_letter: element[0], other_letters: element.slice(1) }
//         words_capitalise.push(word.first_letter.toUpperCase() + word.other_letters)
//     })
//     return words_capitalise
// }
// console.log(capitalise_each_first_letter(string));

//33
// let num = "56,56,657,654,2,1,213,122"
// function add_each_num_in_string(string) {
//     let arr_num = string.split(',')
//     let total = 0
//     arr_num.forEach((element) => { total += parseInt(element) })
//     return total
// }

// console.log(add_each_num_in_string(num));

//34
// let string = "sdddtr ytryry rtyrty rtyrh fdgdf ret"
// function num_of_words(sentence) {
//     return sentence.split(' ').length
// }
// console.log(num_of_words(string));

//35
// let sentence = `sdfsdf
// fdsd,fsdf
// sdfs,df
// s,dfsdf`
// function csv_to_arr(sentence) {
//     let lines = sentence.split("\n")
//     let csv = []
//     for (let i = 0; i < lines.length; i++) {
//         csv.push(lines[i].split(','))
//     }
//     return csv
// }
// console.log(csv_to_arr(sentence));


//36
// let string = "jisdjkljhkgjhmfm"
// function arr_of_each_letter(sentence) {
//     return sentence.split('')
// }
// console.log(arr_of_each_letter(string));

//37
// let string = "jisdjkljhkgjhmfm565646789_\")(|<"
// function arr_of_ASCII_for_each_letter(sentence) {
//     let arr_ASCII_code = []
//     for (let i = 0; i < sentence.length; i++) {
//         arr_ASCII_code.push(sentence.charCodeAt(i))
//     }
//     return arr_ASCII_code
// }
// console.log(arr_of_ASCII_for_each_letter(string));

// 38
// let arr_ASCII_code = [106, 105, 115, 100, 106, 107, 108, 106, 104, 107, 103, 106, 104, 109, 102, 109, 53, 54, 53, 54, 52, 54, 55, 56, 57, 95, 34, 41, 40, 124, 60]
// function ASCII_code_to_string(arr) {
//     let string = ""
//     for (let i = 0; i < arr.length; i++) {
//         string += String.fromCharCode(arr[i])
//     }
//     return string
// }
// console.log(ASCII_code_to_string(arr_ASCII_code));

//39
// let string = "je mange  '56456' des///s bananes)(([ "
// function code_cesar(string, gap_letter) {
//     gap_letter = gap_letter % 26
//     string = string.toLowerCase()
//     function arr_of_ASCII_for_each_letter(sentence) {
//         let arr_ASCII_code = []
//         for (let i = 0; i < sentence.length; i++) {
//             arr_ASCII_code.push(sentence.charCodeAt(i))
//         }
//         return arr_ASCII_code
//     }
//     let arr_ASCII = arr_of_ASCII_for_each_letter(string)
//     for (let i = 0; i < arr_ASCII.length; i++) {
//         if (arr_ASCII[i] >= 97 && arr_ASCII[i] <= 122) {
//             arr_ASCII[i] = (arr_ASCII[i] - 96 + gap_letter) % 26 + 96
//         }
//     }
//     function ASCII_code_to_string(arr) {
//         let string = ""
//         for (let i = 0; i < arr.length; i++) {
//             string += String.fromCharCode(arr[i])
//         }
//         return string
//     }
//     return ASCII_code_to_string(arr_ASCII)
// }
// console.log(code_cesar(string, 28));

//40
// function bubble_sort(arr) {
//     let i_last_unsort_num = arr.length
//     while (i_last_unsort_num !== 0) {
//         for (let i = 0; i <= i_last_unsort_num || i <= arr.length; i++) {
//             if (arr[i] > arr[i + 1] && i !== arr.length - 1) {
//                 let tmp
//                 tmp = arr[i + 1]
//                 arr[i + 1] = arr[i]
//                 arr[i] = tmp
//                 // console.log(arr);
//                 i_last_unsort_num = i
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble_sort([50, 6, 2, 564, 8, 1, -198]));

//41
// function distance_between_two_points(cooronate1, cooronate2) {
    // return [cooronate1[0] - cooronate2[0], cooronate1[1] - cooronate2[1]]
// }
// console.log(distance_between_two_points([5, 3], [-5, 3]));
