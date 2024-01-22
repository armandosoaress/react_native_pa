import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";
import {Ionicons} from "@expo/vector-icons";


const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={Home}
                options={{
                    headerShown: false, 
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Ionicons name="home" size={size} color={color} />;
                        }
                        return <Ionicons name="home-outline" size={size} color={color} />;
                    }
                }}
            />
            <Tab.Screen name="Senhas" component={Passwords}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        if (focused) {
                            return <Ionicons name="key" size={size} color={color} />;
                        }
                        return <Ionicons name="key-outline" size={size} color={color} />;
                    }
                }}
            />
        </Tab.Navigator>
    );
}
