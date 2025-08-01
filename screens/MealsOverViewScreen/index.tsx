import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../../data/dummy-data";
import MealItem from "../../components/MealItem";

export default function MealsOverScreen({route}:any){

    const categoryId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem)=> {
        return mealItem.categoryId.indexOf(categoryId) >=0;
    });

    function renderMealItem(itemData: any){
        const mealItemProps = {
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
            keyExtractor={(item)=>item.id} 
            renderItem={renderMealItem}
            />
        </View>
    );
}