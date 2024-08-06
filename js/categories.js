export class Categories{
    constructor(){
        this.getCategories()
    }
    async getCategories(){
        const URL=`https://www.themealdb.com/api/json/v1/1/categories.php`
        let responce=await fetch(URL)
        responce=await responce.json()
        let categories=responce.categories
        
        
    }
}