import { styles } from "./styles";
import { CATEGORIES } from "../../data/dummy-data";
import { Text, View, FlatList } from "react-native";
import CategoryGridTile from "../../components/CategoryGridTile";




export default function CategoriesScreen({ navigation }: any) {

    function renderCategoryItem(itemData: any) {

        function pressHandler() {
            navigation.navigate("MealsOverview");
        }
        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler}
        />
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}
