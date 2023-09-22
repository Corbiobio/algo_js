let code = "XgP5a98FT45sft"

function decript(code) {
    let new_code = ""
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < code.length; i++) {
        if (parseInt(code[i])) {
            new_code += (parseInt(code[i]) + 3) % 10
        } else {
            if (code[i] === code[i].toUpperCase()) {
                for (let j = 0; j < alphabet.length; j++) {
                    if (code[i] === alphabet[j]) {
                        new_code += (j + 1) % 10
                    }
                }
            } else {
                new_code += code[i].toUpperCase()
            }
        }
    }
    new_code += code.length
    return "https://formation.yoandev.co/?coupon=" + new_code
}
console.log(decript(code));

