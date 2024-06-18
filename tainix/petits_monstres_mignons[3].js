const monsters = ['Brop65:F:91', 'Flyn50:G:89', 'Gloz61:W:13', 'Grib63:W:16', 'Flix27:F:12', 'Frez91:G:47', 'Sino54:G:73', 'Flix12:R:21', 'Plix21:W:44', 'Cron78:R:96', 'Tiro20:R:55', 'Tiro89:F:69', 'Brop94:F:60', 'Plix46:G:58', 'Drin55:F:30', 'Cobi25:G:66', 'Vexo19:F:42', 'Tiro37:R:94', 'Plip97:F:62', 'Vlaz92:G:37', 'Vizo13:F:88', 'Vexo17:G:99', 'Fero78:W:39', 'Drip79:W:80', 'Sino90:R:75', 'Blit73:W:74', 'Fero81:F:82', 'Clur45:F:33', 'Prax84:R:49', 'Blit97:R:77', 'Vexo84:R:24', 'Zorp51:W:25', 'Kron75:R:93', 'Tiro21:R:56', 'Pela43:F:78', 'Zela28:R:43', 'Vizo73:G:76', 'Traz64:F:50', 'Grib23:W:53', 'Clur11:F:79'];

function sortMonster(monsters) {

    const devils = []
    monsters.forEach(item => {
        const monster = item.split(":")

        devils.push({
            name: monster[0],
            food: monster[1],
            weight: parseInt(monster[2]),
        })
    });

    function sortIncresing(monsters) {
        //make shadow copy
        const sorted = [...monsters]

        for (let i = 0; i < sorted.length; i++) {
            let y = i
            let smallest = y

            for (; y < sorted.length; y++) {
                if (sorted[y]["weight"] < sorted[smallest]["weight"]) {
                    smallest = y
                }
            }

            const save = sorted[i]
            sorted[i] = sorted[smallest]
            sorted[smallest] = save
        }

        return sorted
    }
    function sortDecresing(monsters) {
        //make shadow copy
        const sorted = [...monsters]

        for (let i = 0; i < sorted.length; i++) {
            let y = i
            let smallest = y

            for (; y < sorted.length; y++) {
                if (sorted[y]["weight"] > sorted[smallest]["weight"]) {
                    smallest = y
                }
            }

            const save = sorted[i]
            sorted[i] = sorted[smallest]
            sorted[smallest] = save
        }

        return sorted
    }

    const fMonster = sortIncresing(devils.filter(devil => devil["food"] == "F"))
    const gMonster = sortIncresing(devils.filter(devil => devil["food"] == "G"))
    const rMonster = sortDecresing(devils.filter(devil => devil["food"] == "R"))
    const wMonster = sortDecresing(devils.filter(devil => devil["food"] == "W"))

    let fString = ""
    let gString = ""
    let rString = ""
    let wString = ""

    for (let i = 0; i <= 2; i++) {
        fString += fMonster[i]["name"] + "-"
        gString += gMonster[i]["name"] + "-"
        rString += rMonster[i]["name"] + "-"
        wString += wMonster[i]["name"] + "-"
    }

    return fString + gString + rString + wString.slice(0, wString.length - 1)
}

console.log(sortMonster(monsters))