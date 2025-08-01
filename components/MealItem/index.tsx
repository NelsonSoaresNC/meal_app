import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

export default function MealItem({ title, imageUrl, duration, complexity, affordability }: any) {


    return (
        <View style={styles.mealItem}>
            <Pressable 
                android_ripple={{color: "#ccc"}}
                style={({pressed})=> pressed ? styles.buttonPressed : null}    
            >
                <View style={styles.innerContainer}>
                    <Image 
                        source={{uri: imageUrl}}
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