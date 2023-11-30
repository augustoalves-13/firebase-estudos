import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import App from "./App";

const Stack = createNativeStackNavigator()

function Index () {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="app" screenOptions={{headerShown:false}}>
                <Stack.Screen name="app" component={App}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}