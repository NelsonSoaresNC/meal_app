import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 8,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
  
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    buttonPressed: {
        opacity: 0.5
    }
});