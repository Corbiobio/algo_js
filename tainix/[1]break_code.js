const words = ['FQBYWTIUTD', 'FNOYITBYGQ', 'FXGYWTKDOL', 'FQZYWTUURN', 'YFOZWTBPRL', 'QSOLWTBUDM', 'FQOYWTBUSL', 'VQZYYTLKDL', 'FQJXATBUPL', 'GQOYDTGUXL', 'UXPYHZBURL', 'NQPCWTBURJ', 'PNPGWISSRS', 'MQOSNTBUSL', 'FQOYWTNURL', 'FWOYWTSURL', 'FBEYKZBURL', 'PQAAJXSURF', 'DNEGMRBMRL', 'LQWFWTBSQN', 'QXOYWTBARL', 'CQOYWXRURK', 'HQOLWTBUEL', 'EQOYEJBVRW', 'FQOOGTMRZC', 'ZPFYETBUDL', 'UTXBRTBUEL', 'FQIYWTBVRD', 'FQCTWTBEHL', 'GPOYWTLURL', 'FQOYWTBUCL', 'FSMKWTKUZR', 'OGOQLTBWRL', 'FQUPWDHURL', 'FKOYXRGUKC', 'YUEFUGBIRL', 'NQLUHTIFRL', 'JQOYWTBOOS', 'DQPUWZBURL', 'STORWHKUIZ'];
const words_length = words[0].length

function break_code(code, code_length) {

    function find_letter_frequency(idex_letter, arr) {
        let letter_frequency = {}
        for (let i = 0; i < arr.length; i++) {
            if (!letter_frequency[arr[i][idex_letter]]) {
                letter_frequency[arr[i][idex_letter]] = 1
            } else {
                letter_frequency[arr[i][idex_letter]]++
            }
        }
        return letter_frequency
    }

    let letters_frequency = []
    for (let i = 0; i < code_length; i++) {
        letters_frequency.push(find_letter_frequency(i, code))
    }
    console.log(letters_frequency);

    function higher_frequency_letter(obj) {
        let letter = ""
        let frequency = 0
        for (const [key, value] of Object.entries(obj)) {
            if (value > frequency) {
                frequency = value
                letter = key
            }
        }
        return letter
    }
    let final_code = ""
    for (let i = 0; i < letters_frequency.length; i++) {
        final_code += higher_frequency_letter(letters_frequency[i])
    }
    return final_code
}
console.log(break_code(words, words_length));
