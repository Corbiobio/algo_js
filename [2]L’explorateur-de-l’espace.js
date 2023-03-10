let planetes = ['KMZ843:lacs 21:champs 46:marais 90:grottes 67', 'SFZ990:montagnes 91:marais 21:jungles 96:volcans 95:canyons 89:champs 11', 'RIF252:deserts 33:grottes 35:lacs 16:forets 10:mers 64:volcans 90', 'KCX355:grottes 30:jungles 79:forets 10:champs 86:lacs 94', 'DCE764:deserts 15:montagnes 18:jungles 87:marais 45:grottes 68', 'FHP269:champs 84:jungles 90:marais 57:grottes 82:montagnes 64', 'SDR324:grottes 33:deserts 33:champs 87:forets 54:montagnes 17', 'TQJ984:plaines 42:champs 49:montagnes 97:lacs 92:canyons 16:grottes 45', 'JJW707:lacs 69:forets 83:marais 68:jungles 54:plaines 29:mers 95']
let scores = ["canyons 4", "forets 4", "mers 9"]

function recherche(planetes, scores) {
    let biome_recherch = []
    let biome_value = []

    for (let i = 0; i < scores.length; i++) {
        biome_recherch.push(scores[i].substring(0, scores[i].indexOf(" ")))
        biome_value.push(scores[i].substring(scores[i].indexOf(" "), scores[i].length))
    }
    // console.log(biome_recherch);
    // console.log(biome_value);
}

console.log(recherche(planetes, scores));