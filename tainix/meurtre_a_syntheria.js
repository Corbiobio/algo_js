const indices = ['taille_not_geant', 'yeux_is_noir', 'yeux_not_bleus', 'poids_is_mince', 'poids_not_enrobe', 'taille_not_petit', 'poids_not_costaud', 'poids_not_moyen', 'cheveux_is_blanc', 'taille_is_moyen', 'yeux_not_gris'];
const suspects = ['nom:Kim,yeux:bleus,cheveux:chatain,taille:moyen,poids:enrobe', 'nom:Martine,yeux:vairons,cheveux:noirs,taille:moyen,poids:mince', 'nom:Emma,yeux:marrons,cheveux:blonds,taille:petit,poids:costaud', 'nom:Jade,yeux:verts,cheveux:noirs,taille:grand,poids:enrobe', 'nom:Catherine,yeux:gris,cheveux:bleu,taille:geant,poids:mince', 'nom:Gabin,yeux:noir,cheveux:blanc,taille:moyen,poids:mince', 'nom:Louise,yeux:bleus,cheveux:chatain,taille:petit,poids:mince', 'nom:Hugo,yeux:noir,cheveux:rouge,taille:grand,poids:mince', 'nom:Jack,yeux:verts,cheveux:chatain,taille:geant,poids:moyen', 'nom:Rachid,yeux:bleus,cheveux:rouge,taille:geant,poids:enrobe', 'nom:Icham,yeux:bleus,cheveux:blonds,taille:geant,poids:costaud', 'nom:Beatrice,yeux:gris,cheveux:noirs,taille:geant,poids:mince', 'nom:Mila,yeux:vairons,cheveux:noirs,taille:petit,poids:mince', 'nom:Richard,yeux:noir,cheveux:vert,taille:petit,poids:moyen', 'nom:Lucas,yeux:vairons,cheveux:roux,taille:geant,poids:moyen', 'nom:Sacha,yeux:vairons,cheveux:rouge,taille:geant,poids:enrobe', 'nom:Noe,yeux:noir,cheveux:bleu,taille:moyen,poids:enrobe', 'nom:Agathe,yeux:marrons,cheveux:noirs,taille:geant,poids:enrobe', 'nom:Arthur,yeux:noir,cheveux:bleu,taille:moyen,poids:mince', 'nom:Pauline,yeux:vairons,cheveux:roux,taille:grand,poids:enrobe'];

let suspects_info = []

for (let i = 0; i < suspects.length; i++) {
    suspects_info.push({})
    suspects[i].split(",").forEach((info)=>{
        let info_arr = info.split(":")
        suspects_info[i][info_arr[0]] = info_arr[1]
    })
}

function verif_clue(clue,data){
    clue = clue.split("_")
    
    if(clue[1] == "is"){
        return data[clue[0]] == clue[2] ? true : false
    }else{
        return data[clue[0]] != clue[2] ? true : false
    }
}

let i = 0
for (i; i < indices.length; i++) {
    const clue = indices[i];
    const guilty = []

    for (let i = 0; i < suspects_info.length ; i++) {
        if(verif_clue(clue,suspects_info[i])){
            guilty.push(suspects_info[i])
        }
    }
    suspects_info = guilty;

    if (suspects_info.length == 1) {
        i ++
        break
    }
}
console.log();
console.log(suspects_info[0].nom + "_" + i);