const blocs = 'WWWWWWWWDDDDDDDDLLLPPPPPPAAAAAAAAMMMMMMMMMZZZZZZZVVXXXXXWWWWWWDDDDLLLLLLLLLPPPPPAAAAAMMMMMMZZZZZVVVVVVVXXXXXXXWWWWDDDDDDDDDLLPPPPPPPPPAAAAAAAMMZZVV';


function sort(blocs) {
    let actual = blocs[0]
    let quantity = 1
    let result = ""

    for (let i = 1; i < blocs.length; i++) {
        if (blocs[i] === actual && i != blocs.length - 1) {
            quantity++
        } else {
            if (i == blocs.length - 1) {
                quantity++
            }
            quantity % 2 != 0 ? result += actual : false

            actual = blocs[i]
            quantity = 1
        }
    }
    return result
}

console.log(sort(blocs));