// const candidates = 'MKRIBSJY'
// let votes = 'SRREJBRRRRMMIJYMMMRSRYSMRKJRSSSIIJXRBMAMISRXJMSXBBGBRKRRRYCMSSIJRIIMIMJIBIKYKSEMKJAMYARYACJDMJGERMYMMMRSEXIJBIGSJSIJEEBMYJXRRAKJEBRJYSMBYYY';
// let candidats = []

// for (let i = 0; i < candidates.length; i++) {
//     candidats.push(candidates[i])
// }

// function bulletin_count(candidat, votes) {
//     let vote_candidat = []
//     let vote_blanc = 0

//     for (let i = 0; i < candidat.length; i++) {
//         let vote_temp = 0
//         for (let j = 0; j < votes.length; j++) {
//             if (candidat[i] === votes[j]) {
//                 vote_temp++
//             }
//         }
//         vote_candidat.push(vote_temp)
//         vote_blanc += vote_temp
//     }
//     vote_blanc = votes.length - vote_blanc

//     let best_value = [Math.max(...vote_candidat)]
//     best_value.push(vote_candidat.findIndex((element) => element === best_value[0]))
//     vote_candidat.splice(vote_candidat.findIndex((element) => element === best_value[0]), 1)

//     let second_best_value = [Math.max(...vote_candidat)]
//     second_best_value.push(vote_candidat.findIndex((element) => element === second_best_value[0]))

//     return `${candidat[best_value[1]] + Math.round(best_value[0] / (votes.length - vote_blanc) * 1000) / 10}-${candidat[second_best_value[1]] + Math.round(second_best_value[0] / (votes.length - vote_blanc) * 1000) / 10}`
// }

// console.log(bulletin_count(candidates, votes));






