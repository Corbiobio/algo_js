const force = 11;
const vitesse = 11;
const batterie = 100;
const dechets = [14, 17, 5, 9, 15, 8, 15, 26, 35, 22, 17, 7, 8, 34, 9, 10, 7, 14, 7, 31];

function clean(force, vitesse, batterie, dechets) {

    dechets.forEach(dechet => {

        if (force >= dechet) {
            batterie--
        } else {
            const battery_missing = (dechet - force) * 2
            if (battery_missing <= batterie / 2) {
                batterie -= battery_missing
            } else {
                batterie -= 2
            }
        }

        if (batterie < 20) {
            if (batterie - vitesse <= 0) {
                return "KO"
            }
            batterie = 100 - vitesse
        }
    });
    return batterie
}

console.log(clean(force, vitesse, batterie, dechets));