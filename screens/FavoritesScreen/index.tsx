import { useContext } from "react";
import MealsList from "../../components/MealsList";
import { MEALS } from "../../data/dummy-data";
import { FavoritesContext } from "../../store/context/favorites-contex";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../hooks/hooks";

interface FavoritesState {
  ids: string[];
}

export default function FavoritesScreen(){
    
    //const favoriteMealsCtx = useContext(FavoritesContext);

    const favoritesMealsIds = useAppSelector(state => state.favoriteMeal.ids);

    const favoritesMeals = MEALS.filter(meal => favoritesMealsIds.includes(meal.id))

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