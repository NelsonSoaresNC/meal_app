import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverScreen from './screens/MealsOverViewScreen';
import FavoritesContextProvider from './store/context/favorites-contex';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function drawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#ba0000ff" },
    headerTintColor: "white",
    sceneStyle: { backgroundColor: "#3f2f25" },
    drawerContentStyle: { backgroundColor: "white" },
    drawerActiveTintColor: "blue",
    drawerActiveBackgroundColor: "#e4baa1"
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: "All Categories",
      drawerIcon: ({ color, size }) => (<Ionicons name="list" color={color} />)
    }} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
      title: "Favorites",
      drawerIcon: ({ color, size }) => (<Ionicons name="star" color={color} />)
    }} />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer >
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: "#ba0000ff" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" }
          }}>
            <Stack.Screen
              name="MealsCategories"
              component={drawerNavigator}
              options={{
                //title: "Meals Categories",
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverScreen}

            />

            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}

            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
