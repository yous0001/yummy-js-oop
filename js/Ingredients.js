import { displayIngredients } from "./ui.js";

export class Ingredients{
    constructor(){
        this.getIngredients()
    }
    async getIngredients(){
        const URL=`https://www.themealdb.com/api/json/v1/1/list.php?i=list`
        let responce=await fetch(URL)
        responce=await responce.json()
        displayIngredients(responce.meals.slice(0,20));
        // let items=Array.from(document.getElementsByClassName("Ingredients"))
        // items.forEach(item=>{
        //     item.addEventListener('click',()=>{this.getIngredientsMeals(item.id)})
        // })
        
    }
}