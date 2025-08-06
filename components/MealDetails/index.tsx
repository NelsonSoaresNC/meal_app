import { Text, View } from "react-native";
import { styles } from "./styles";

export default function MealDetails({duration, complexity, affordability, style, textStyle}: any) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.dateailItem, textStyle ]}>{duration}</Text>
            <Text style={[styles.dateailItem, textStyle ]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.dateailItem, textStyle ]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}