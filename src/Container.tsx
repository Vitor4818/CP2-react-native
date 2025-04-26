import {NavigationContainer} from "@react-navigation/native"
export default function NavigatorContainer(children: any){
    return(
        <NavigationContainer>
            {children}
        </NavigationContainer>
    )
}