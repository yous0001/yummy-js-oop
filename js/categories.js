import { MealDetails } from "./details.js"
import { displayCategories, displayMeals } from "./ui.js"

export class Categories{
    constructor(){
        this.getCategories()
        this.currentCategory
    }
    async getCategories(){
        const URL=`https://www.themealdb.com/api/json/v1/1/categories.php`
        let responce=await fetch(URL)
        responce=await responce.json()
        let categories=responce.categories
        displayCategories(categories)
        let items=Array.from(document.getElementsByClassName("category"))
        items.forEach(item=>{
            item.addEventListener('click',()=>{this.getCategoriesMeals(item.id)})
        })
    }
    async getCategoriesMeals(category){
        const URL=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
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