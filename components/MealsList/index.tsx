import { FlatList, View } from "react-native";
import MealItem from "../MealItem";
import { styles } from "./styles";


export default function MealsList({items}: any) {
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
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}