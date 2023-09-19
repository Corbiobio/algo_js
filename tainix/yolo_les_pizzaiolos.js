const ingredients = ["tomates:2","champignons:3","mozzarella:3","jambon:2","serrano:5","chevre:2","oeuf:2","chorizo:4","saumon:5","basilic:1","oignons:2","poivron:1","salade:1","anchois:2","olive:2","ananas:5"];
const pizzas = ["poivron,chevre,olive,chevre","chevre,mozzarella,serrano","poivron,basilic,anchois,chevre,champignons,saumon","tomates,mozzarella,poivron,jambon,chorizo,tomates","anchois,oeuf,jambon,chorizo,salade,saumon","jambon,chevre,chorizo,basilic","oignons,salade,mozzarella,poivron,oignons,jambon","tomates,basilic,champignons,chevre,serrano","chorizo,serrano,basilic,mozzarella,ananas,champignons","mozzarella,chorizo,poivron,champignons,chevre","salade,olive,oeuf,olive,oeuf,ananas","salade,oeuf,serrano,serrano,oeuf,serrano","saumon,anchois,jambon","olive,anchois,olive","jambon,jambon,mozzarella,chevre,chorizo,salade","oeuf,anchois,chevre,oignons,jambon,anchois","tomates,saumon,champignons,champignons,olive,olive","basilic,anchois,poivron,champignons,chorizo,champignons","olive,olive,saumon","poivron,mozzarella,salade,chorizo","poivron,salade,anchois","ananas,basilic,oeuf,serrano,olive,jambon","champignons,serrano,tomates","ananas,saumon,oignons","saumon,anchois,oeuf"];
const pizzaiolos = ["michelangelo","michelangelo","leonardo","raphael","donatello","donatello","leonardo","raphael","raphael","leonardo","michelangelo","michelangelo","raphael","raphael","donatello","raphael","michelangelo","raphael","donatello","michelangelo","leonardo","leonardo","michelangelo","donatello","donatello"];


function price_of_all_pizza(ingredients,pizzas,pizzaiolos){

    let price_total = 0

    let ingredients_object = {}
    //create a object of each ingredients with is price 
    for(let i = 0 ; i < ingredients.length ; i++){
        let index_to_cut = ingredients[i].indexOf(":")
        ingredients_object[ingredients[i].slice(0,index_to_cut)] = parseInt(ingredients[i].slice(index_to_cut +1,ingredients[i].length)) 
    }

    //replace string of ingredients by array of ingredients
    for (let i = 0; i < pizzas.length; i++) {
        pizzas[i] = pizzas[i].split(",")
    }

    for (let i = 0; i < pizzaiolos.length; i++) {
        if (pizzaiolos[i] === "leonardo") {
            price_total += price_leonardo(ingredients_object,pizzas[i])
        }else if(pizzaiolos[i] === "donatello"){
            price_total += price_donatello(ingredients_object,pizzas[i])
        }else if(pizzaiolos[i] === "michelangelo" ){
            price_total += price_michelangelo(ingredients_object,pizzas[i])
        }else if(pizzaiolos[i] === "raphael"){
            price_total += price_raphael(ingredients_object,pizzas[i])

        }
    }

    console.log(price_total);

    function price_leonardo(ingredients,pizza){
        //leonardo add each ingredients price

        let pizza_price = 0
        for (let i = 0; i < pizza.length; i++) {
            pizza_price += ingredients[pizza[i]]
        }
        return pizza_price
    }

    function price_donatello(ingredients,pizza){
        //donatello take the expensive ingredient and multiply by 5
        
        //take price of first ingredient
        let expensive_price = ingredients[pizza[0]]

        for (let i = 1; i < pizza.length; i++) {
            if (ingredients[pizza[i]] > expensive_price) {
                expensive_price = ingredients[pizza[i]]
            }            
        }

        return expensive_price * 5
    }
    function price_michelangelo(ingredients,pizza){
        //donatello take the expensive ingredient and multiply by 5
        
        //take price of first and second ingredient
        let first_expensive_price = ingredients[pizza[0]]
        let second_expensive_price = ingredients[pizza[1]]

        if(first_expensive_price < second_expensive_price){
            let tmp = first_expensive_price
            first_expensive_price = second_expensive_price
            second_expensive_price = tmp
        }


        //sort price 
        for (let i = 2; i < pizza.length; i++) {
            
            if(ingredients[pizza[i]] > first_expensive_price){
                second_expensive_price = first_expensive_price
                first_expensive_price = ingredients[pizza[i]]
            }else if (ingredients[pizza[i]] > second_expensive_price) {
                second_expensive_price = ingredients[pizza[i]]
            }            
        }

        return (first_expensive_price + second_expensive_price) * 3
    }

    function price_raphael(ingredients,pizza){
        //first 10€ add expensive price and lower price

        let expensive_price = ingredients[pizza[0]]

        for (let i = 1; i < pizza.length; i++) {
            if (ingredients[pizza[i]] > expensive_price) {
                expensive_price = ingredients[pizza[i]]
            }            
        }

        let lower_price = ingredients[pizza[0]]

        for (let i = 1; i < pizza.length; i++) {
            if (ingredients[pizza[i]] < lower_price) {
                lower_price = ingredients[pizza[i]]
            }            
        }

        return 10 + expensive_price + lower_price
    }
}
price_of_all_pizza(ingredients,pizzas,pizzaiolos)