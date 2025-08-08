import { useContext } from "react";
import MealsList from "../../components/MealsList";
import { MEALS } from "../../data/dummy-data";
import { FavoritesContext } from "../../store/context/favorites-contex";
import { Text, View } from "react-native";
import { styles } from "./styles";

export default function FavoritesScreen(){
    
    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoritesMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))

    if(favoritesMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You hava no favorite meals yet</Text>
            </View>
        );
    }

    return (
       <MealsList items={favoritesMeals} />
    );
}