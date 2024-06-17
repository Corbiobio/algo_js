const meteorites = ['5:3#49', '7:0#39', '5:2#30', '2:4#26', '5:4#16', '2:7#16', '3:6#18', '5:7#21'];
const instructions = 'BTBRTLLBLBTTRLBBBTLTBBBTTBBBTTTTLRLRLRLTB';
const starship = '6:6';

//donee bug
// const meteorites = ['0:5#27', '5:7#50', '3:5#23', '0:1#27', '1:5#47', '1:1#30', '6:2#18'];
// const instructions = 'BTBLRTRLBTRBRTTRLRTLBLTRTRLBTLLRLL';
// const starship = '2:1';


function starship_calcul(meteorites,instructions,starship){

    function verif_around_ship(ship,space){
        let coordonate = []
        if (ship.x + 1 !== 8 && space[ship.y][ship.x + 1] !== "") {
            coordonate.push(space[ship.y][ship.x + 1])
        }
        if (ship.x - 1 !== -1 && space[ship.y][ship.x - 1]  !== "") {
            coordonate.push(space[ship.y][ship.x - 1])
        }
        if (ship.y - 1 !== -1 && space[ship.y - 1][ship.x]  !== "") {
            coordonate.push(space[ship.y - 1][ship.x])
        }
        if (ship.y + 1 !== 8 && space[ship.y + 1][ship.x]  !== "") {
            coordonate.push(space[ship.y + 1][ship.x])
        }
        // return all case around ship
        return coordonate
    }

    let space = []
    for (let i = 0; i < 8; i++) {
        space.push([])
        for (let j = 0; j < 8; j++) {
            space[i].push("") 
        }
    }

    //create a object with coordonate and hp of each meteorite
    for (let i = 0; i < meteorites.length; i++) {
        let split = meteorites[i].split("#")
        meteorites[i] = {
            hp: split[1],      
            x: split[0].split(":")[0],
            y: split[0].split(":")[1]
        }
    }
    //place meteorite 
    for (let i = 0; i < meteorites.length; i++) {
        const x = meteorites[i].x 
        const y = meteorites[i].y 
        const hp = parseInt(meteorites[i].hp) 

        space[y][x] = hp
    }

    let ship = {
        y:parseInt([starship[1]]),
        x:parseInt([starship[0]]),
        energie: 0
    }

    //place ship
    space[ship.y][ship.x]= "ship"
    
    //first verif when spawn
    let first_result = verif_around_ship(ship,space)
    if (first_result[0]) {
        for (let i = 0; i < first_result.length; i++) {
            ship.energie += Math.ceil(first_result[i]/5)                
        }
    }
    
    for (let i = 0; i < instructions.length; i++) {

        switch (instructions[i]) {
            case "T":
                space[ship.y][ship.x] = ""
                ship.y ++
                space[ship.y][ship.x] = "ship"
            break;
            
            case "B":
                space[ship.y][ship.x] = ""
                ship.y --
                space[ship.y][ship.x] = "ship"
            break;
            
            case "R":
                space[ship.y][ship.x] = ""
                ship.x ++
                space[ship.y][ship.x] = "ship"
            break;
            
            case "L":
                space[ship.y][ship.x] = ""
                ship.x --
                space[ship.y][ship.x] = "ship"
            break;
        }        
        
        let meteorite = verif_around_ship(ship,space);

        // if something in meteorite put a shield
        if (meteorite[0]) {
            for (let i = 0; i < meteorite.length; i++) {
                ship.energie += Math.ceil(meteorite[i]/5)                
                console.log(Math.ceil(meteorite[i]/5));
            }
        }

        //each case ship move, he use one energie
        ship.energie++
    }
    return ship.energie    
}
console.log(starship_calcul(meteorites,instructions,starship.split(":")));
