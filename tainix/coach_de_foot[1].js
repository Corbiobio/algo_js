const joueurs = [45, 3, 49, 25, 26, 33, 20, 34, 54, 48, 7, 12, 51, 35, 17, 11, 56, 27, 47, 13, 24, 9, 43, 19, 2, 36, 22, 15, 38, 57, 1];

function bestplayer(joueurs) {
    let equipe = []

    for (let i = 0; joueurs.length !== equipe.length; i++) {
        equipe.push(joueurs[i])
    }

    equipe.sort(function (a, b) {
        return b - a;
    })

    while (equipe.length !== 11) {
        equipe.pop()
    }

    let position = ""
    for (let j = 0; j < equipe.length; j++) {
        position += joueurs.indexOf(equipe[j]) + "-";
    }

    position = position.substring(0, position.length - 1)

    return position
}
console.log(bestplayer(joueurs));
