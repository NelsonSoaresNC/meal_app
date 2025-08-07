import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverScreen from './screens/MealsOverViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import {Ionicons} from "@expo/vector-icons"

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function drawerNavigator(){
  return <Drawer.Navigator screenOptions={{
       headerStyle: { backgroundColor: "#ba0000ff" },
          headerTintColor: "white",
          sceneStyle: { backgroundColor: "#3f2f25" },
          drawerContentStyle: {backgroundColor: "white"},
          drawerActiveTintColor: "blue",
          drawerActiveBackgroundColor: "#e4baa1"
  }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: "All Categories",
      drawerIcon: ({color, size}) => (<Ionicons name="list" color={color} />)
    }}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
      title: "Favorites",
      drawerIcon: ({color, size}) => (<Ionicons name="star" color={color} />)
    }}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
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
