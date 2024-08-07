import { MealDetails } from "./details.js";
import { displayArea, displayMeals } from "./ui.js";

export class Areas{
    constructor(){
        this.getAreas()
    }
    async getAreas(){
        const URL=`https://www.themealdb.com/api/json/v1/1/list.php?a=list`
        let responce=await fetch(URL)
        responce=await responce.json()
        displayArea(responce.meals);
        let items=Array.from(document.getElementsByClassName("area"))
        items.forEach(item=>{
            item.addEventListener('click',()=>{this.getAreaMeals(item.id)})
        })
        
    }
    async getAreaMeals(area){
        const URL=`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
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