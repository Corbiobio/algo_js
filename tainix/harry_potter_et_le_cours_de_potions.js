const queue_lezard = 28;
const oreille_souris = 20;
const petale_rose = 19;
const nuage_tenebreux = 28;
const poussiere_fee = 22;
const eau_jouvence = 20;
const bave_crapaud = 19;

function ingredients_in_object(lezard, souris, rose, tenebreux, fee, jouvence, crapaud) {
    return {
        lezard: lezard,
        souris: souris,
        rose: rose,
        tenebreux: tenebreux,
        fee: fee,
        jouvence: jouvence,
        crapaud: crapaud
    }
}
let ingredients_obj = ingredients_in_object(queue_lezard, oreille_souris, petale_rose, nuage_tenebreux, poussiere_fee, eau_jouvence, bave_crapaud)

function potion_acide(ingredients) {
    if (ingredients.lezard >= 3) {
        if (ingredients.souris >= 2) {
            if (ingredients.rose >= 1) {
                ingredients.lezard -= 3
                ingredients.souris -= 2
                ingredients.rose -= 1
                return ingredients
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}
function potion_foudre(ingredients) {
    if (ingredients.tenebreux >= 2) {
        if (ingredients.fee >= 1) {
            ingredients.tenebreux -= 2
            ingredients.fee -= 1
            return ingredients
        } else {
            return false
        }
    } else {
        return false
    }
}
function potion_givre(ingredients) {
    if (ingredients.jouvence >= 3) {
        if (ingredients.crapaud >= 1) {
            ingredients.jouvence -= 3
            ingredients.crapaud -= 1
            return ingredients
        } else {
            return false
        }
    } else {
        return false
    }
}

function damage_possible(ingredients) {
    let damage = 0
    while (potion_givre(ingredients)) {
        damage++
    }
    while (potion_acide(ingredients)) {
        damage += 2
    }
    while (potion_foudre(ingredients)) {
        damage += 3
    }
    return damage
}
console.log(damage_possible(ingredients_obj));