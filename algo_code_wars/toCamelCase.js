// let string = "sdddtr_ytryry_rtyrty-rtyrh-fdgdf_ret"

// function toCamelCase(sentence) {
//     let index_replace = []
//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === "_") {
//             sentence = sentence.replace("_", "")
//             index_replace.push(i)
//         } else if (sentence[i] === "-") {
//             sentence = sentence.replace("-", "")
//             index_replace.push(i)
//         }
//     }
//     sentence = sentence.split("")
//     index_replace.forEach(element => {
//         sentence[element] = sentence[element].toUpperCase()
//     });

//     return sentence = sentence.join('')
// }
// console.log(toCamelCase(string));