const planetes = ['ZGS643:aride', 'JHQ945:pluvieux', 'SWD566:polaire glacial', 'YKB358:tropical jungle', 'MLH919:humide, pluvieux averses, polaire glacial', 'SZM175:humide', 'PGQ524:chaud fournaise', 'UCT711:pluvieux', 'LRL665:froid venteux', 'WLO315:chaud', 'YGI351:continental', 'QXM580:froid', 'YPV683:pluvieux', 'OYO361:froid', 'XSL252:continental', 'LAB865:froid venteux, tropical, pluvieux, humide et moite', 'EBB675:continental cool, humide, aride', 'BTY775:polaire, humide et moite, polaire glacial, humide', 'YLC957:froid venteux', 'QTW042:tropical', 'PRX120:polaire glacial', 'DCK287:humide et moite, polaire glacial, tropical jungle, humide', 'MOR540:polaire glacial', 'OAU516:tropical jungle, chaud fournaise', 'BTX807:tropical'];
let climat = 'froid'

function recherche(planetes, climat) {
    let climat_Delete = climat + " "
    let index = []
    let index_Delete = []
    for (let i = 0; i < planetes.length; i++) {
        if (planetes[i].indexOf(climat) > 0) {
            index.push(i)
        }
        if (planetes[i].indexOf(climat_Delete) > 0) {
            index_Delete.push(i)
        }
        console.log(index);
    }
    // if (index) {
    //     return "NOPLANET"
    // }
    for (let i = 0; i < index_Delete.length; i++) {
        for (let j = 0; j < index.length; j++) {
            if (index_Delete[i] === index[j]) {
                index.splice(j, 1)
                console.log(index);
            }
        }
    }
    let planete_name = ""
    for (let i = 0; i < index.length; i++) {

        planete_name += planetes[index[i]].substring(0, 3)
        console.log(planete_name);
    }
    return planete_name
}

console.log(recherche(planetes, climat));