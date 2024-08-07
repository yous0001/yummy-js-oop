import { displayMeals } from "./ui.js"
import { MealDetails} from "./details.js"
import { Categories } from "./categories.js"
import { Areas } from "./area.js"
import { Ingredients } from "./Ingredients.js"

let navIcon=document.getElementById("nav-icon")
let items=[]
let isNavOpen=false

navIcon.addEventListener('click',function(){
    if(isNavOpen===true){
        closeNav()
    }else{
        openNav()
    }
})

async function openNav(){
    isNavOpen=true
    navIcon.classList.replace("fa-bars","fa-x")
    $("nav").animate({
        left:`0px` 
    },1000,()=>{
        $(".nav-body .links #link1").animate({
            top:`0px` 
        },200,()=>{
            $(".nav-body .links #link2").animate({
                top:`0px`
            },200,()=>{
                $(".nav-body .links #link3").animate({
                    top:`0px`
                },200,()=>{
                    $(".nav-body .links #link4").animate({
                        top:`0px`
                    },200,()=>{
                        $(".nav-body .links #link5").animate({
                        top:`0px`},200)
                    })
                })
            })
        })
    })
   
}
function closeNav(){
    isNavOpen=false
    navIcon.classList.replace("fa-x","fa-bars")


        $(".nav-body .links #link5").animate({
            top:`300px` 
        },200,()=>{
            $(".nav-body .links #link4").animate({
                top:`300px`
            },200,()=>{
                $(".nav-body .links #link3").animate({
                    top:`300px`
                },200,()=>{
                    $(".nav-body .links #link2").animate({
                        top:`300px`
                    },200,()=>{
                        $(".nav-body .links #link1").animate({
                        top:`300px`},200,()=>{
                            $("nav").animate({
                                left:`-${document.getElementsByClassName("nav-body")[0].clientWidth}px` 
                            },1000)
                        })
                    })
                })
            })
        })
    
}

async function getDefaultMeals(){
    const URL=`https://www.themealdb.com/api/json/v1/1/search.php?s=`
    let responce=await fetch(URL)
    responce=await responce.json()  

    displayMeals(responce.meals)   

    items=Array.from(document.getElementsByClassName("item"))
    items.forEach(async item=>{
        item.addEventListener('click',async function(){
            let mealdetails=new MealDetails(item.id)
            
        })
    })
}

getDefaultMeals()

document.getElementById("link2").addEventListener('click',function(){
    let categories=new Categories()
})

document.getElementById("link3").addEventListener('click',function(){
    let areas=new Areas()
})

document.getElementById("link4").addEventListener('click',function(){
    let ingredients=new Ingredients()
})

document.getElementById("link1").addEventListener('click',function(){
    document.getElementById("serach-container").classList.replace("d-none","d-block")
    document.getElementById("row").innerHTML=""
})