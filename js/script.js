import { displayMeals } from "./ui.js"
import { MealDetails} from "./details.js"
import { Categories } from "./categories.js"
import { Areas } from "./area.js"
import { Ingredients } from "./Ingredients.js"
import { searchLetter, serachName } from "./serach.js"
import { ageValidation, emailValidation, nameValidation, passwordValidation, phoneValidation, repasswordValidation, validation } from "./validation.js"

let navIcon=document.getElementById("nav-icon")
let items=[]
let isNavOpen=false
let nameField=document.getElementById("name")
let emailField=document.getElementById("email")
let phoneField=document.getElementById("phone")
let ageField=document.getElementById("age")
let passwordField=document.getElementById("password")
let repasswordField=document.getElementById("repassword")

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

document.getElementById("link1").addEventListener('click',function(){
    document.getElementById("serach-container").classList.replace("d-none","d-block")
    document.getElementById("contact-container").classList.replace("d-block","d-none")
    document.getElementById("row").innerHTML=""
    closeNav()
})

document.getElementById("search-name").addEventListener('keyup',function(){
    serachName(document.getElementById("search-name").value)
})

document.getElementById("search-letter").addEventListener('keyup',function(){
    searchLetter(document.getElementById("search-letter").value)
})

document.getElementById("link2").addEventListener('click',function(){
    document.getElementById("serach-container").classList.replace("d-block","d-none")
    document.getElementById("contact-container").classList.replace("d-block","d-none")
    let categories=new Categories()
    closeNav()
})

document.getElementById("link3").addEventListener('click',function(){
    document.getElementById("serach-container").classList.replace("d-block","d-none")
    document.getElementById("contact-container").classList.replace("d-block","d-none")
    let areas=new Areas()
    closeNav()
})

document.getElementById("link4").addEventListener('click',function(){
    document.getElementById("serach-container").classList.replace("d-block","d-none")
    document.getElementById("contact-container").classList.replace("d-block","d-none")
    let ingredients=new Ingredients()
    closeNav()
})

document.getElementById("link5").addEventListener('click',function(){
    document.getElementById("serach-container").classList.replace("d-block","d-none")
    document.getElementById("contact-container").classList.replace("d-none","d-block")
    document.getElementById("row").innerHTML=""
    closeNav()
})



nameField.addEventListener('keyup',()=>{nameValidation();validation();})
emailField.addEventListener('keyup',()=>{emailValidation();validation();})
phoneField.addEventListener('keyup',()=>{phoneValidation();validation();})
ageField.addEventListener('keyup',()=>{ageValidation();validation();})
passwordField.addEventListener('keyup',()=>{passwordValidation();validation();})
repasswordField.addEventListener('keyup',()=>{repasswordValidation();validation();})

$(window).ready(()=>{
    $("#loading").slideUp(1000)
})
