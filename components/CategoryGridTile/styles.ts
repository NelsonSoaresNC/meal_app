import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 8,
        backgroundColor: "white",
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    button:{
        flex: 1
    },
    title:{
        fontWeight: "bold",
        fontSize: 18,
    },
    buttonPressed:{
        opacity: 0.5
    }
});