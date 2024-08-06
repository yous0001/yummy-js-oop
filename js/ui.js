

export function displayMeals(meals){
    let cartona=``;
    meals.forEach(meal => {
        cartona+=`
        <div class="col-lg-3 col-md-4">
                <div class="item rounded-2 overflow-hidden position-relative">
                    <img src="${meal.strMealThumb}" class="w-100" >
                    <div class="img-layer position-absolute">
                        <p>${meal.strIngredient1}</p>
                    </div>
                </div>
            </div>
        `        
    });
    document.getElementById("row").innerHTML=cartona
}