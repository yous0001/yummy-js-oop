import { displayMealDetials } from "./ui.js"

export class MealDetails{
    constructor(id){
        this.id=id
        this.getMealDetails(id)
        
    }
    async getMealDetails(id){
        const URL=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        let responce=await fetch(URL)
        let data=await responce.json()

        
        displayMealDetials(data.meals[0]);
        

    }
}