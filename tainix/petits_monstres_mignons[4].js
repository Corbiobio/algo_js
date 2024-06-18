const monsters = ['W', 'F', 'W', 'R', 'R', 'F', 'G', 'W', 'W', 'G', 'W', 'F', 'G', 'G', 'G', 'W', 'W', 'W', 'W', 'G', 'G', 'F', 'F', 'G', 'R', 'G', 'G', 'W', 'R'];

function brideMonster(monsters) {

    const devils = {
        r: 0,
        f: 0,
        w: 0,
        g: 0,
    }

    monsters.forEach(monster => {
        switch (monster) {
            case "R":
                devils.r++
                break;
            case "F":
                devils.f++
                break;
            case "W":
                devils.w++
                break;
            case "G":
                devils.g++
                break;
        }
    });

    const diffFR = Math.abs(devils.f - devils.r)
    const diffGW = Math.abs(devils.g - devils.w)

    const brideFR = (devils.f + devils.r - diffFR) / 2
    const brideGW = (devils.g + devils.w - diffGW) / 2

    return brideFR * brideGW + diffFR + diffGW;
}

console.log(brideMonster(monsters))