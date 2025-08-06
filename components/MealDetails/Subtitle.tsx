import { Text, View } from "react-native"
import { styles } from "./styles"


export default function Subtitle({children}: any) {
    return (
        <View style={styles.subtitleContainer} >
            <Text style={styles.subtitle}> {children} </Text>
        </View>
    );
}