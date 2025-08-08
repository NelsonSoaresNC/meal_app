import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import InconButton from "../../components/IconButton";
import MealDetails from "../../components/MealDetails";
import List from "../../components/MealDetails/List";
import Subtitle from "../../components/MealDetails/Subtitle";
import { MEALS } from "../../data/dummy-data";
import { FavoritesContext } from "../../store/context/favorites-contex";
import { styles } from "./styles";

export default function MealDetailScreen({ route, navigation }: any) {
    
    const mealId = route.params.mealId;

    const slectedMeal = MEALS.find((meal) => meal.id === mealId);

    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);


    function changeFavoriteStatusHandler(){
       if(mealIsFavorite){
        favoriteMealsCtx.removeFavorite(mealId);
       }else{
        favoriteMealsCtx.addFavorite(mealId);   
       }
    }

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerRight: ()=>{
                return <InconButton 
                onPress={changeFavoriteStatusHandler} 
                icon={mealIsFavorite ? "star" : "star-outline"}
                color={"white"}
                />
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: slectedMeal?.imageUrl }} />
            <Text style={styles.title}>{slectedMeal?.title}</Text>
            <MealDetails
                duration={slectedMeal?.duration}
                complexity={slectedMeal?.complexity}
                affordability={slectedMeal?.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={slectedMeal?.ingredients} />

                <Subtitle>Step</Subtitle>
                <List data={slectedMeal?.steps} />
            </View>
            </View>
        </ScrollView>
    );
}