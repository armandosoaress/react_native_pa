import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";
import { Login } from "./pages/login";
import { Ionicons } from "@expo/vector-icons";
import { Person } from "./pages/person";


const Tab = createBottomTabNavigator();

export function Routes() {
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    if (!userLoggedIn) {
        return <Login onLogin={() => setUserLoggedIn(true)} />;
    }

    return (
        <Tab.Navigator>
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
                component={Person}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
