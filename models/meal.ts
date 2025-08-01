export default class Meal{
    id: any;
    categoryId: any;
    title: any;;
    affordability: any;
    complexity: any;
    imageUrl: any;
    duration: any;
    ingredients: any;
    steps: any;
    isGlutenFree: any;
    isVegan: any;
    isVegetarian: any;
    isLactoseFree: any;

    constructor(
        id: any, 
        categoryId: any, 
        title: any, 
        affordability: any, 
        complexity: any, 
        imageUrl: any, 
        duration: any, 
        ingredients: any,
        steps: any,
        isGlutenFree: any,
        isVegan: any,
        isVegetarian: any,
        isLactoseFree: any
    ){
        this.id = id; 
        this.categoryId = categoryId; 
        this.title = title; 
        this.affordability = affordability;
        this.complexity  = complexity;
        this.imageUrl  = imageUrl;
        this.duration  = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}