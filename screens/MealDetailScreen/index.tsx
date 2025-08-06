import { Text } from "react-native";
import { styles } from "./styles";

export default function MealDetailScreen({route}: any){
    const mealId = route.params.mealId
    return <Text> This is the Meal Detail Screen ({mealId})</Text>
}