const table = ['SWE : Bronze,Bronze,Silver,Bronze,Gold,Bronze,Bronze,Bronze,Bronze', 'TUR : Gold,Silver,Bronze,Silver,Gold,Bronze,Bronze', 'RUS : Bronze,Bronze,Gold,Gold,Silver,Silver,Bronze,Bronze,Bronze,Bronze,Silver,Bronze', 'CAN : Bronze,Silver,Bronze,Bronze,Silver,Bronze', 'KOR : Bronze,Silver,Bronze,Bronze,Bronze,Silver,Bronze', 'GER : Bronze,Bronze,Gold,Bronze,Gold,Bronze,Bronze,Bronze,Bronze,Bronze,Bronze,Silver', 'BEL : Gold,Bronze,Bronze,Bronze,Bronze,Bronze,Silver', 'NZL : Silver,Silver,Bronze,Bronze,Silver,Bronze,Silver,Gold,Gold,Bronze', 'HUN : Bronze,Bronze,Gold,Bronze,Silver,Bronze,Silver,Bronze'];

const pays = {}
//set in a obj
table.forEach(item => {
    let splited = item.split(':');
    pays[splited[0].trim()] = {medals: splited[1].trim().split(","),total: 0 }
});

let best_pays = ""
let best_score = 0

for (let property in pays) {
    const item = pays[property]

    item["medals"].forEach(medal =>{
        if (medal == "Bronze") {
            item["total"] += 2
        }else if(medal == "Silver") {
            item["total"] += 5
        }else if(medal == "Gold") {
            item["total"] += 10
        }
    })

    if(item["total"] > best_score){
        best_score = item["total"]
        best_pays = property
    } 
}
console.log(best_pays + "_" + best_score);