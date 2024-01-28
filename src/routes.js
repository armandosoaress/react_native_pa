import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";
import { Login } from "./pages/login";
import { Ionicons } from "@expo/vector-icons";
import { Person } from "./pages/person";
import { Contas } from "./pages/contas";
import { Contas1 } from "./pages/contas1";
import { Contas2 } from "./pages/contas2";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Routes() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    if (!userLoggedIn) {
        return <Login onLogin={() => setUserLoggedIn(true)} />;
    }

    return (
        <Tab.Navigator initialRouteName="Senhas">
            <Tab.Screen
                name="Inicio"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Senhas"
                component={Passwords}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "key" : "key-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}>
                {() => <Person onLogout={() => setUserLoggedIn(false)} />}
            </Tab.Screen>

            <Tab.Screen
                name="maincontas"
                component={ContasStackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "key" : "key-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function ContasStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Contas" component={Contas} />
            <Stack.Screen name="Contas1" component={Contas1} />
            <Stack.Screen name="Contas2" component={Contas2} />
        </Stack.Navigator>
    );
}
