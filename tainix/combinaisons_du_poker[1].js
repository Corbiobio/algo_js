const mains = ['2 10 5 10 10', '9 2 dame 7 10', '3 9 4 4 7', '3 roi 8 10 5', '6 2 9 dame dame', 'valet 9 roi dame 3', '8 3 10 9 5', 'roi 6 3 5 8', '5 5 6 7 as', '5 10 dame 8 9', '9 7 valet 10 dame', '2 as 8 8 dame', '5 roi 5 5 roi', '6 valet roi 7 4', '2 6 valet 9 9', 'valet 3 7 6 2', '3 5 as 10 9', '5 3 4 9 dame', '8 9 roi as roi', '9 roi dame 9 8', '3 6 5 10 valet', '4 roi 7 valet 3', 'dame 7 dame 8 as'];


function points(mains) {
    let points = 0
    for (let i = 0; i < mains.length; i++) {
        let main = mains[i].split(" ")
        let objet = main.reduce((a, v) => ({ ...a, [v]: 0 }), {})
        for (let j = 0; j < main.length; j++) {
            objet[main[j]]++
        }
        // console.log(objet);

        let values = []
        for (const [key, value] of Object.entries(objet)) {
            values.push(value)
        }
        console.log(values);

        if (values.length === 5) {
            //si 5 carte dif
            points++
        } else if (values.length === 4) {
            //si une paire
            points += 5
        } else if (values.length === 3) {
            for (let j = 0; j < values.length; j++) {
                if (values[j] === 1 && (values[j + 1] === 2 || values[j - 1] === 2)) {
                    //si 2 paires
                    points += 10
                } else if (values[j] === 3) {
                    // si 3 meme carte
                    points += 20
                }
            }
        } else {
            for (let j = 0; j < values.length; j++) {
                if (values[j] === 4) {
                    // si carre
                    points += 200
                } else if (values[j] === 3) {
                    //si full (3 et 2)
                    points += 50
                }
            }
        }
        console.log(points);
    }
    return points
}


console.log(points(mains));
