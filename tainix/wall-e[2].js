const batterie = 87;
const cote = 8;
const dechets = ['6,8', '4,8', '3,5', '1,8', '2,5', '2,8', '5,1', '1,3', '6,7', '1,4', '7,8', '2,1'];
const chargeurs = ['4,9', '9,4'];

function recycle(dechets, chargeurs, batterie, cote) {
    cote = cote + 1
    function buildMap(cote, chargeurs, dechets) {

        function addItems(array, itemValue, map) {
            array.forEach(item => {
                const [x, y] = item.split(',');
                map[x - 1][y - 1] = itemValue;
            });
            return map;
        }

        let map = []

        for (let x = 0; x < cote; x++) {
            map[x] = []

            for (let y = 0; y < cote; y++) {
                map[x][y] = 0;
            }
        }

        map = addItems(dechets, 1, map);
        map = addItems(chargeurs, 2, map);
        return map;
    }

    const map = buildMap(cote, chargeurs, dechets)

    function findNearest(map, itemValue, defaultX, defaultY) {
        let nearestDistance = false
        let nearestX = false
        let nearestY = false
        for (let x = defaultX; x < map.length; x++) {
            for (let y = defaultY; y < map.length; y++) {
                if (map[x][y] === itemValue) {
                    const newDistance = x - defaultX + y - defaultY

                    //if not set or a nearest item set new nearest
                    if (!nearestDistance || newDistance < nearestDistance) {
                        nearestDistance = newDistance
                        nearestX = x
                        nearestY = y
                        break
                    }
                }
            }
            for (let y = defaultY; y >= 0; y--) {
                if (map[x][y] === itemValue) {
                    //if not set or a nearest item set new nearest

                    const newDistance = x - defaultX + defaultY - y
                    if (!nearestDistance || newDistance < nearestDistance) {
                        nearestDistance = newDistance
                        nearestX = x
                        nearestY = y
                        break
                    }
                }
            }
        }

        for (let x = defaultX; x >= 0; x--) {
            for (let y = defaultY; y < map.length; y++) {
                if (map[x][y] === itemValue) {
                    const newDistance = defaultX - x + y - defaultY

                    //if not set or a nearest item set new nearest
                    if (!nearestDistance || newDistance < nearestDistance) {
                        nearestDistance = newDistance
                        nearestX = x
                        nearestY = y
                        break
                    }
                }
            }
            for (let y = defaultY; y >= 0; y--) {
                if (map[x][y] === itemValue) {
                    const newDistance = defaultX - x + defaultY - y

                    //if not set or a nearest item set new nearest
                    if (!nearestDistance || newDistance < nearestDistance) {
                        nearestDistance = newDistance
                        nearestX = x
                        nearestY = y
                        break
                    }
                }
            }
        }
        return { nearestDistance: nearestDistance, nearestX: nearestX, nearestY: nearestY }
    }

    for (let i = 0; i < dechets.length; i++) {
        console.log(findNearest(map, 1, 0, 0))
        const { nearestDistance, nearestX, nearestY } = findNearest(map, 1, 0, 0)
        map[nearestX][nearestY] = 0

        batterie -= nearestDistance
        console.log(batterie);

        const next = findNearest(map, 1, 0, 0);

        // if batterie - back + next distaance 
        if (batterie - (nearestDistance * 2 + next.nearestDistance) < cote * 2) {
            const nearestChargeur = findNearest(map, 2, nearestX, nearestY)

            batterie = 100 - nearestChargeur.nearestDistance
            console.log(batterie + " :  batterie reload");
        }

        batterie -= nearestDistance * 2
        console.log(batterie);
    }
    return batterie
}
console.log(recycle(dechets, chargeurs, batterie, cote));