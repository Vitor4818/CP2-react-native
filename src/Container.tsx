import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from './stack/StackNavigation'

export default function NavigatorContainer() {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
}