import { useLayoutEffect } from "react";
import MealsList from "../../components/MealsList";
import { CATEGORIES, MEALS } from "../../data/dummy-data";


export default function MealsOverScreen({ route, navigation }: any) {

    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryId.indexOf(categoryId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId)?.title;
        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryId, navigation]);

    return <MealsList  items={displayedMeals}/>
}