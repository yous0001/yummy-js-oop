import { MealDetails } from "./details.js";
import { displayIngredients, displayMeals } from "./ui.js";

export class Ingredients{
    constructor(){
        this.getIngredients()
    }
    async getIngredients(){
        const URL=`https://www.themealdb.com/api/json/v1/1/list.php?i=list`
        let responce=await fetch(URL)
        responce=await responce.json()
        displayIngredients(responce.meals.slice(0,20));
        let items=Array.from(document.getElementsByClassName("ingredient"))
        items.forEach(item=>{
            item.addEventListener('click',()=>{this.getIngredientsMeals(item.id)})
        })
        
    }
    async getIngredientsMeals(ingredient){
        const URL=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        let responce=await fetch(URL)
        responce=await responce.json()
        
        displayMeals(responce.meals)

        let items=Array.from(document.getElementsByClassName("item"))
        items.forEach(async item=>{
            item.addEventListener('click',async function(){
                let mealdetails=new MealDetails(item.id)
            
        })
    })
    }
}