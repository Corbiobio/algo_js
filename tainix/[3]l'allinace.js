// const pseudo = 'Elisa Gagnon';
// const list = ['Clemence Lemieux', 'Elise Brault', 'Giselle Hakimi', 'Farida Charbonneau', 'Margaux Gagne', 'Salome Parent', 'Sanaa Dupuis', 'Reina Nguyen', 'Jade Lapierre', 'Apolline Lacasse', 'Charlotte Cloutier', 'Margot Legault', 'Kamila Kante', 'Zainab Dufour', 'Yara Deschamps', 'Kalina Paradis', 'Clementine Cloutier', 'Chloe Lapierre', 'Capucine Boucher', 'Zuri Normand', 'Lea Allard', 'Laura Levesque', 'Zara Gravel', 'Liliana Joly', 'Ebru Huard', 'Anouk Lachance', 'Zoya Akindele', 'Sara Dube', 'Kiara Balde', 'Habiba Charbonneau', 'Valentina Diop', 'Samira Kone', 'Oceane Martin', 'Kehinde Moussa', 'Aisha Garcia', 'Lucie Fabre', 'Carmen Plante', 'Louise Richard', 'Hafsa Lalande', 'Leonie Diop', 'Leonore Renaud', 'Aaliyah Lee', 'Kenza Demers', 'Suhaila Lam', 'Leila Dandurand', 'emilie Chung', 'Jamila Labonte', 'Tamara Demers', 'Mila Normand', 'Zoe Hakimi', 'Amara Lemay', 'Halima Michaud'];

// function calcul_scores(word) {
//     let letters = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let score = 0

//     for (let i = 0; i < word.length; i++) {
//         score += letters.indexOf(word[i])
//     }
//     return score
// }

// function compare_scores(list_name, pseudo) {
//     let score_to_reach = calcul_scores(pseudo)
//     let same_score
//     for (let i = 0; i < list_name.length; i++) {
//         if (calcul_scores(list_name[i]) === score_to_reach) {
//             same_score = list_name[i]
//         }
//     }
//     return same_score
// }
// console.log(compare_scores(list, pseudo));