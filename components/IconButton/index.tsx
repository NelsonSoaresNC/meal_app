import { Pressable } from "react-native";
import { styles } from "./styles";
import {Ionicons} from "@expo/vector-icons"

export default function InconButton({icon, color, onPress}: any){
    return <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
}