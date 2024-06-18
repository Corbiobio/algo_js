const group = ['CRO', 'POL', 'ANG', 'AUT', 'BEL', 'FRA', 'ESP'];
const scores = ['CRO_POL_0_2', 'CRO_ANG_0_3', 'CRO_AUT_2_2', 'CRO_BEL_0_3', 'CRO_FRA_3_0', 'CRO_ESP_1_0', 'POL_CRO_1_3', 'POL_ANG_0_1', 'POL_AUT_1_2', 'POL_BEL_2_0', 'POL_FRA_1_2', 'POL_ESP_0_0', 'ANG_CRO_2_0', 'ANG_POL_2_0', 'ANG_AUT_2_4', 'ANG_BEL_0_0', 'ANG_FRA_3_0', 'ANG_ESP_1_0', 'AUT_CRO_1_4', 'AUT_POL_0_4', 'AUT_ANG_1_2', 'AUT_BEL_2_3', 'AUT_FRA_0_1', 'AUT_ESP_3_2', 'BEL_CRO_3_2', 'BEL_POL_3_2', 'BEL_ANG_0_0', 'BEL_AUT_2_0', 'BEL_FRA_2_0', 'BEL_ESP_0_1', 'FRA_CRO_2_1', 'FRA_POL_1_1', 'FRA_ANG_1_0', 'FRA_AUT_1_2', 'FRA_BEL_0_1', 'FRA_ESP_0_1', 'ESP_CRO_2_1', 'ESP_POL_3_1', 'ESP_ANG_0_0', 'ESP_AUT_2_3', 'ESP_BEL_1_0', 'ESP_FRA_0_0'];

function calculateScore(group, scores) {

    const lands = {}
    group.forEach(land => {
        lands[land] = 0
    })

    scores.forEach(item => {
        let [land1, land2, score1, score2] = item.split('_')
        score1 = parseInt(score1)
        score2 = parseInt(score2)

        if (score1 > score2) {
            lands[land1] += 3
        } else if (score2 > score1) {
            lands[land2] += 3
        } else {
            lands[land1] += 1;
            lands[land2] += 1;
        }
    })

    let result = ""
    while (Object.keys(lands).length) {
        let biggest
        for (const name in lands) {
            if (!biggest) {
                biggest = name
                continue
            }
            if (lands[name] > lands[biggest]) {
                biggest = name
            }
        }
        delete lands[biggest]
        result += biggest
    }

    return result
}

console.log(calculateScore(group, scores))