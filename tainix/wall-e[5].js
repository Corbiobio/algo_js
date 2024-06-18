const shots = [6, 9, 8, 7, 4, 6, 6, 8, 2, 5, 9, 6, 5, 4, 5, 4, 2, 3, 2, 2, 9];

function move(shots) {
    let total = 0

    let lastOne = 0

    shots.forEach(value => {


        if (value - lastOne > 0) {
            //half circle
            total += Math.round(value * 314)
        } else {
            total += Math.round(value * 314 * 2 / 3)
        }
        lastOne = value
    });

    return total / 100
}

console.log(move(shots));