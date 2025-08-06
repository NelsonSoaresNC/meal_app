import { FlatList, View } from "react-native";
import MealItem from "../../components/MealItem";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import { styles } from "./styles";
import { useLayoutEffect } from "react";


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


    function renderMealItem(itemData: any) {
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration
        }
        return (
            <MealItem {...mealItemProps} />
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}