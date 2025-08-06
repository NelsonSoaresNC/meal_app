import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type MealItemNavigationProp = NativeStackNavigationProp<RootStackParamList, 'MealDetail'>;
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
                </View>
                <View style={styles.details}>
                    <Text style={styles.dateailItem}>{duration}</Text>
                    <Text style={styles.dateailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.dateailItem}>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    );
}