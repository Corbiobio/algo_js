const doors = '1,3,4,1,8,5,4,8,8,4,1,5,8';
const operations = 21;

function doors_open(doors, operations) {
    doors = doors.split(",")
    let doors_states = ""

    for (let i = 0; i < doors.length; i++) {
        if ((operations + 1) % (parseInt(doors[i]) + 1) === 0) {
            doors_states += "O"
        } else if ((operations + 1) % (parseInt(doors[i]) + 1) === 1) {
            doors_states += "C"
        } else {
            doors_states += "X"
        }
    }
    return doors_states
}
console.log(doors_open(doors, operations));