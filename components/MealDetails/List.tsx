import { Text, View } from "react-native";
import { styles } from "./styles";

export default function List({data}: any) {
    return data.map((dataItem: string) => (
        <View style={styles.listItem}>
            <Text style={styles.itemText} key={data}>{dataItem}</Text>
        </View>
    ))
}