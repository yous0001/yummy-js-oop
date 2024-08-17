
export function displayMeals(meals){
    
    let cartona=``;
    meals.forEach(meal => {
        cartona+=`
        <div class="col-lg-3 col-md-4">
                <div class="item rounded-2 overflow-hidden position-relative" id="${meal.idMeal}">
                    <img src="${meal.strMealThumb}" class="w-100" >
                    <div class="img-layer position-absolute">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
            </div>
        `        
    });
    document.getElementById("row").innerHTML=cartona

}


export function displayMealDetials(meal){
    
    let Ingredient=[]
    let measure=[]
    let counter=0
    let mealMap=new Map(Object.entries(meal))
    let recipe=``
    let tagsHTMl=``

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            measure.push(meal[`strMeasure${i}`])
            Ingredient.push(meal[`strIngredient${i}`])
        }
    }

    // for (let [key, value] of mealMap) {
    //     counter++
    //     if(counter>=10&&counter<30){
    //         if(value==="")
    //             continue;
    //         Ingredient.push(value)
    //     }
    //     if(counter>=30&&counter<50){
    //         if(value===" ")
    //             break;
    //         measure.push(value)
    //     }
    // }
    for(let i=0;i<Ingredient.length;i++){
        recipe+=`
        <li class="alert alert-info m-2 p-1">${measure[i]} ${Ingredient[i]}</li>`
    }
    if(meal.strTags!=null){
        let tags=(meal.strTags).split(',')

        tags.forEach((tag)=>{
            tagsHTMl+=`<li class="alert alert-danger m-2 p-1">${tag}</li>`
        })
    }
    


    let cartona=`
    <div class="col-md-4 text-white">
                <img src="${meal.strMealThumb}" class="w-100">
                <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8 text-white">
                <h2>Instructions</h2>
                <p>${meal.strInstructions.split("STEP").join(`<br/><span class="fw-bold">STEP</span>`)}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${recipe}
                </ul>

                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsHTMl}
                </ul>

                <a target="_blank" href="${meal.strSource}"
                    class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`
            document.getElementById("row").innerHTML=cartona
}



export function displayCategories(categories){
    let cartona=``
    categories.forEach(category=>{
        cartona+=`
        <div class="col-lg-3 col-md-4">
                    <div class="category rounded-2 overflow-hidden position-relative" id="${category.strCategory}">
                        <img src="${category.strCategoryThumb}" class="w-100" >
                        <div class="img-layer position-absolute flex-column text-center">
                            <h3>${category.strCategory}</h3>
                            <p>${category.strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                        </div>
                    </div>
                </div>`
    })
    document.getElementById("row").innerHTML=cartona
}

export function displayArea(areas){
    let cartona=``
    areas.forEach(area=>{
        cartona+=`
        <div class="col-lg-3 col-md-4 text-white">
                <div class="area rounded-2 text-center cursor-pointer" id="${area.strArea}">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${area.strArea}</h3>
                </div>
        </div>`
        })
        document.getElementById("row").innerHTML=cartona
}

export function displayIngredients(ingredients){
    let cartona=``
    ingredients.forEach(ingredient=>{
        cartona+=`
        <div class="col-lg-3 col-md-4 text-white">
                <div class="ingredient rounded-2 text-center cursor-pointer" id="${(ingredient.strIngredient).replace(" ","_")}">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${ingredient.strIngredient}</h3>
                        <p>${(ingredient.strDescription?.split(" ").slice(0,20).join(" "))}</p>
                </div>
        </div>`
        })
        document.getElementById("row").innerHTML=cartona
}