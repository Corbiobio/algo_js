const dispositif = '4-3-3';
const forces = [29, 9, 30, 8, 14, 2, 23, 3, 32, 13, 25, 31, 27, 17, 26, 15, 11, 19, 20, 28, 21];
const postes = ['G', 'G', 'A', 'M', 'D', 'A', 'M', 'D', 'A', 'A', 'G', 'D', 'A', 'A', 'M', 'M', 'M', 'A', 'A', 'A', 'D'];



function sort_player(players, power) {
    let keeper_index = []
    let keeper_power = []

    let defender_index = []
    let defender_power = []

    let midfielder_index = []
    let midfielder_power = []

    let attacker_index = []
    let attacker_power = []

    for (let i = 0; i < players.length; i++) {
        switch (players[i]) {
            case "G":
                keeper_index.push(i)
                keeper_power.push(power[i])
                break
            case "D":
                defender_index.push(i)
                defender_power.push(power[i])
                break
            case "M":
                midfielder_index.push(i)
                midfielder_power.push(power[i])
                break
            case "A":
                attacker_index.push(i)
                attacker_power.push(power[i])
                break
        }
    }


}
sort_player(postes, forces)