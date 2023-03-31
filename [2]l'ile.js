const soif = 14;
const faim = 19;
const forme = 67;
const island = ['WT__AWW', 'WETEWWARWZTW_WFYW_', 'TFFWYYY_FW_', 'WRYAWZFWRAFAFEW', 'ZWWEZFYWW_EW', 'EWEYWRFEWRRYTAZTET', 'TWEFEY__Y_FYY_F', 'WWAWWTFZFARTZW', 'WWRYTFRYREWRZFYRTW', 'FFYFTWWAZFZAF'];



function explorer(soif, faim, forme, island) {
    function verif_life(soif, faim, forme) {
        if (forme <= 0) {
            return [false, soif * faim]
        } else if (soif <= 0) {
            return [false, faim * forme]
        } else if (faim <= 0) {
            return [false, soif * forme]
        } else {
            return [true]
        }
    }

    console.log("forme " + forme);
    console.log("faim " + faim);
    console.log("faim " + soif);
    for (let i = 0; i < island.length; i++) {
        for (let j = 0; j < island[i].length; j++) {
            if (island[i][j] === "W") {
                soif++
                forme--
                if (!verif_life(soif, faim, forme)[0]) {
                    return verif_life(soif, faim, forme)[1]
                }
            } else if (island[i][j] === "F") {
                faim++
                forme--
                if (!verif_life(soif, faim, forme)[0]) {
                    return verif_life(soif, faim, forme)[1]
                }
            } else if (island[i][j] === "_") {
                forme -= 3
                if (!verif_life(soif, faim, forme)[0]) {
                    return verif_life(soif, faim, forme)[1]
                }
            } else {
                forme--
                if (!verif_life(soif, faim, forme)[0]) {
                    return verif_life(soif, faim, forme)[1]
                }
            }
            console.log(island[i][j]);
        }
        forme = Math.floor(forme + ((faim + soif) / 2))
        faim -= 5
        soif -= 5
        if (!verif_life(soif, faim, forme)[0]) {
            return verif_life(soif, faim, forme)[1]
        }
        console.log("forme " + forme);
        console.log("faim " + faim);
        console.log("faim " + soif);
    }
    return soif * faim * forme
}

console.log(explorer(soif, faim, forme, island));