const dispositif = '3-4-3';
const forces = [21, 9, 10, 59, 47, 41, 28, 30, 15, 14, 45, 6, 33, 54, 49, 4, 2, 20, 35, 25, 46, 40, 51, 44, 31, 24, 29, 58, 7, 12, 34];
const postes = ['G', 'M', 'A', 'A', 'D', 'M', 'A', 'A', 'M', 'M', 'M', 'D', 'M', 'M', 'D', 'D', 'A', 'M', 'A', 'A', 'D', 'M', 'M', 'A', 'M', 'A', 'A', 'A', 'A', 'A', 'D'];

function sort_player(players, power, compo) {
    let keeper = []
    let defender = []
    let midfielder = []
    let attacker = []


    for (let i = 0; i < players.length; i++) {
        switch (players[i]) {
            case "G":
                keeper.push({ power: power[i], index: i })
                break
            case "D":
                defender.push({ power: power[i], index: i })
                break
            case "M":
                midfielder.push({ power: power[i], index: i })
                break
            case "A":
                attacker.push({ power: power[i], index: i })
                break
        }
    }

    function best_player(players) {
        best = players[0]
        let index = 0
        for (let i = 1; i < players.length; i++) {
            if (players[i].power > best.power) {
                best = players[i]
                index = i
            }
        }
        players.splice(index, 1)
        return { best_player: best, new_players: players }
    }

    function list_best_player(num_of_player, players) {

        if (num_of_player <= players.length) {

            let player_list = []
            for (let i = 0; i < num_of_player; i++) {

                let result = best_player(players)
                players = result.new_players
                player_list.push(result.best_player)
            }
            return player_list
        }
        else {
            return [false]
        }
    }

    console.log(compo);

    let all_best_player = []
    let enough_player = true

    list_best_player(1, keeper).forEach((player) => { if (player) { all_best_player.push(player) } else { enough_player = false } })
    list_best_player(compo[0], defender).forEach((player) => { if (player) { all_best_player.push(player) } else { enough_player = false } })
    list_best_player(compo[2], midfielder).forEach((player) => { if (player) { all_best_player.push(player) } else { enough_player = false } })
    list_best_player(compo[4], attacker).forEach((player) => { if (player) { all_best_player.push(player) } else { enough_player = false } })

    console.log(all_best_player);

    if (enough_player) {
        let index_of_best_player = ""

        while (all_best_player.length !== 0) {
            index_of_best_player += best_player(all_best_player).best_player.index + "-"
        }
        index_of_best_player = index_of_best_player.slice(0, -1)
        console.log(index_of_best_player);

    } else {
        return "KO"
    }
}
sort_player(postes, forces, dispositif)