const distance = 1320;
const events = "T_T__NNNN__NNN__T__T__T__T__T__NNNN__T__T__T_T";

function train_time(train_path, range) {
    let power_break = 0
    let natural_incident = 0
    let full_speed = 0
    let train_station = 0
    let time = 0

    for (let i = 0; i < train_path.length; i++) {
        switch (train_path[i]) {
            case "T":
                train_station++
                break
            case "_":
                full_speed++
                break
            case "P":
                power_break++
                break
            case "N":
                natural_incident++
                break
        }
    }

    function power_break_time(n) {
        //instruction say with a power break, the train speed is 5km/h for 10km so 2h
        return {
            time: n * 120,
            //unite is in minute
            km: n * 10
        }
    }
    function natural_incident_time(n) {
        //instruction say with a natural incident, the train speed is 10km/h for 5km so 30 minutes
        return {
            time: n * 30,
            //unite is in minute
            km: n * 5
        }
    }
    function train_station_time(n) {
        //instruction say when a train leave or reach a train station , the train speed is 50km/h for 5km so 6 minutes
        //but if a train reach a train station he inevitably leave him so he do 5km * 2 and 6min * 2 for each station 
        const train_info = {
            time: n * 12,
            //unite is in minute
            km: n * 10
        }
        //the instruction say a train path start always by a T and finish by a T (train station)
        //so with the calcul we do befor we can delete one start and one leave
        train_info.time -= 12
        train_info.km -= 10
        return train_info
    }

    let result = train_station_time(train_station)
    time += result.time
    range -= result.km

    result = power_break_time(power_break)
    time += result.time
    range -= result.km

    result = natural_incident_time(natural_incident)
    time += result.time
    range -= result.km

    // convert min in second
    time *= 60

    //all km remaining at 200km/h (in second)
    time += Math.round(range / 200 * 60 * 60)

    return time
}
console.log(train_time(events, distance));
