import { FlatList, View } from "react-native";
import MealItem from "../../components/MealItem";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import { styles } from "./styles";
import { useLayoutEffect } from "react";
import MealsList from "../../components/MealsList";


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