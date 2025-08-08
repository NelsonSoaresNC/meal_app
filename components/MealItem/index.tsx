import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MealDeatils from "../MealDetails";
import { NavigationType } from "../../types/types";

type MealItemNavigationProp = NativeStackNavigationProp<NavigationType, 'MealDetail'>;
export default function MealItem({ id, title, imageUrl, duration, complexity, affordability }: any) {

    const navigation = useNavigation<MealItemNavigationProp>();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={styles.image}
                    />
                    <Text style={styles.title}>{title}</Text>
                    <MealDeatils duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    );
}