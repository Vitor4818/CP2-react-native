import {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import DetailScreen from "../screens/DetailScreen"
import ProfileScreen from "../screens/ProfileScreen"

const Stack = createNativeStackNavigator()
export default function StackNavigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
            <Stack.Screen name="Details" component={DetailScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}