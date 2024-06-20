const map = [1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1];

function sortRecursive(map) {
    function incrementCube(map, indexMap, totalCubes) {
        let newTotal = 0

        //shallow copy
        const newMap = [...map]
        for (let i = 0; i < map.length; i++) {
            let nearCube = 0

            if (map[i - 1] == indexMap && (i - 1) % 15 != 14) {
                nearCube++
            }
            if (map[i + 15] == indexMap) {
                nearCube++
            }
            if (map[i + 1] == indexMap && (i + 1) % 15 != 0) {
                nearCube++
            }
            if (map[i - 15] == indexMap) {
                nearCube++
            }

            if (nearCube >= 3) {
                newMap[i]++
                newTotal++
            }
        }

        //if no cube update and not the first iteration
        if (newTotal == 0 && indexMap != 1) {
            return { newMap: map, indexMap: indexMap, totalCubes: totalCubes }
        } else {
            return incrementCube(newMap, indexMap += 1, newTotal)
        }
    }

    const { newMap, indexMap, totalCubes } = incrementCube(map, 1, 0)


    return totalCubes * indexMap
}

function sortBad(map) {
    function incrementCube(map, indexMap) {
        let totalCubes = 0

        //shallow copy
        const newMap = [...map]
        for (let i = 0; i < map.length; i++) {
            let nearCube = 0

            if (map[i - 1] == indexMap && (i - 1) % 15 != 14) {
                nearCube++
            }
            if (map[i + 15] == indexMap) {
                nearCube++
            }
            if (map[i + 1] == indexMap && (i + 1) % 15 != 0) {
                nearCube++
            }
            if (map[i - 15] == indexMap) {
                nearCube++
            }

            if (nearCube >= 3) {
                newMap[i]++
                totalCubes++
            }
        }
        return { newMap: newMap, totalCubes: totalCubes }
    }

    let indexMap = 1
    let previousTotal = 1

    while (true) {
        const { newMap, totalCubes } = incrementCube(map, indexMap)

        if (totalCubes > 0) {
            map = newMap
            indexMap++
            previousTotal = totalCubes
        } else {
            break
        }
    }
    return previousTotal * indexMap
}

console.log(sortBad(map));
console.log(sortRecursive(map));