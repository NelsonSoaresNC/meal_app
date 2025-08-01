import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";


export default function CategoryGridTile({title, color, onPress}: any){
    return(
        <View style={styles.gridItem}>
            <Pressable android_ripple={{color: "#ccc"}}
             style={({pressed})=>[styles.button, pressed ? styles.buttonPressed : null]}
             onPress={onPress}
             >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}