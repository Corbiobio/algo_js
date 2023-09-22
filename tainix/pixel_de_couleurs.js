const map = ['w', 'w', 'w', 'r', 'w', 'w', 'w', 'w', 'r', 'w', 'w', 'r', 'w', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'w', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'r', 'r', 'w', 'w', 'r', 'w', 'w', 'w', 'w', 'r', 'w', 'w', 'w', 'w', 'r', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'];

function color(map) {
    let pixel_blue = 0
    for (let i = 0; i < map.length; i++) {
        let pixel_temp = pixel_blue
        if (map[i] === "r") {
            if (i % 10 === 0) {
                if (map[i + 1] === "w" && map[i + 1] !== "b") {
                    map[i + 1] = "b"
                    pixel_blue++
                }
                if (map[i - 10] === "w" && map[i - 10] !== "b") {
                    map[i - 10] = "b"
                    pixel_blue++
                }
                if (map[i + 10] === "w" && map[i + 10] !== "b") {
                    map[i + 10] = "b"
                    pixel_blue++
                }
            } else if ((i + 1) % 10 === 0) {
                if (map[i - 1] === "w" && map[i - 1] !== "b") {
                    map[i - 1] = "b"
                    pixel_blue++
                }
                if (map[i - 10] === "w" && map[i - 10] !== "b") {
                    map[i - 10] = "b"
                    pixel_blue++
                }
                if (map[i + 10] === "w" && map[i + 10] !== "b") {
                    map[i + 10] = "b"
                    pixel_blue++
                }
            } else {

                if (map[i - 1] === "w" && map[i - 1] !== "b") {
                    map[i - 1] = "b"
                    pixel_blue++
                }
                if (map[i + 1] === "w" && map[i + 1] !== "b") {
                    map[i + 1] = "b"
                    pixel_blue++
                }
                if (map[i - 10] === "w" && map[i - 10] !== "b") {
                    map[i - 10] = "b"
                    pixel_blue++
                }
                if (map[i + 10] === "w" && map[i + 10] !== "b") {
                    map[i + 10] = "b"
                    pixel_blue++
                }
                console.log(i + " add " + (pixel_blue - pixel_temp));
            }
        }
    }
    return pixel_blue
}
console.log(color(map));