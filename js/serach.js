import { MealDetails } from "./details.js"
import { displayMeals } from "./ui.js"

export async function serachName(name){
    const URL=`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    let responce=await fetch(URL)
    responce=await responce.json()
    displayMeals(responce.meals)
    
    let items=Array.from(document.getElementsByClassName("item"))
        items.forEach(async item=>{
            item.addEventListener('click',async function(){
                let mealdetails=new MealDetails(item.id)
                document.getElementById("serach-container").classList.replace("d-block","d-none")
        })
    })
    
}

export async function searchLetter(letter){
    const URL=`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    let responce=await fetch(URL)
    responce=await responce.json()
    displayMeals(responce.meals)
    
    let items=Array.from(document.getElementsByClassName("item"))
        items.forEach(async item=>{
            item.addEventListener('click',async function(){
                let mealdetails=new MealDetails(item.id)
                document.getElementById("serach-container").classList.replace("d-block","d-none")
        })
    })
}