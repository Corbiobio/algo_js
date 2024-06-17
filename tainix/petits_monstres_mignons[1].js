const weight = 3;
const formula = '3W7';
const foods = 'FFRFRGGFFWRGRWFFFWFWRFGFW';
const mainFood = formula[1]
const coefA = parseInt(formula[0])
const coefB = parseInt(formula[2])

const nbrFoods = foods.split(mainFood).length - 1
const totalWeight = ((coefA * 1 + coefB) * nbrFoods) + weight

console.log(totalWeight);