const monsters = ['Zorp92:7:3W9', 'Zorp96:2:3R1', 'Clur81:5:4G9', 'Griz78:3:2F2', 'Pela49:6:3R9', 'Zorp98:2:2R2', 'Prax96:3:2G4', 'Flyn65:3:3W9', 'Vrip76:1:3R6', 'Prio64:2:3G1', 'Moxa63:1:4F8', 'Luno54:5:4G8', 'Pela83:6:2F6', 'Flix73:1:4R6', 'Vrip31:1:3F4', 'Truz55:3:4R9', 'Luno38:8:3F5', 'Gloz34:1:4R1', 'Griz43:5:3G5', 'Zevo54:3:3R3', 'Plor16:6:4W8'];
const foods = 'W7W1W6G2R6F7R1R2W7W1W2F8W3R3F4G2G8F6W9F7F8W7R1R9F3R1G6R5W4F6W3F8W6R7W9';
function feadMonster(monsters, foods) {

    const devils = {}
    monsters.forEach(item => {
        const monster = item.split(":")
        const noidea = monster[2].split("")

        devils[monster[0]] = {
            weight: parseInt(monster[1]),
            food: noidea[1],
            coefA: parseInt(noidea[0]),
            coefB: parseInt(noidea[2]),
        }
    });

    for (let i = 0; i < foods.length; i += 2) {
        const food = foods[i]
        const weight = parseInt(foods[i + 1])

        const canEat = []

        //all monsters name that can eat this food
        for (const name in devils) {
            if (devils[name]["food"] == food) {
                canEat.push(name)
            }
        }

        let smallest = canEat[0]

        for (let y = 1; y < canEat.length; y++) {
            if (devils[smallest].weight > devils[canEat[y]].weight) {
                smallest = canEat[y]
            } else if (devils[smallest].weight == devils[canEat[y]].weight && smallest > canEat[y]) {
                //if same weight, get the first in alphabet
                smallest = canEat[y]
            }
        }
        devils[smallest].weight += devils[smallest].coefA * weight + devils[smallest].coefB
    }

    let bigest
    for (const name in devils) {

        //if not set
        if (!bigest) {
            bigest = name
            continue
        }

        if (devils[name].weight > devils[bigest].weight) {
            bigest = name
        }
    }

    return bigest + ":" + devils[bigest].weight
}

console.log(feadMonster(monsters, foods));