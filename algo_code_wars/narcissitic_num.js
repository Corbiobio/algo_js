//  https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript


function narcissitic(num) {
    let arr_num = num.toString().split('').map(Number);
    let total = 0
    for (let i = 0; i < arr_num.length; i++) {
        total += Math.pow(arr_num[i], arr_num.length)
    }
    return num === total ? true : false
}

console.log(narcissitic(153));