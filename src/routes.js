import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "./pages/home";
import { Passwords } from "./pages/passwords";
import { Login } from "./pages/login";
import { Ionicons } from "@expo/vector-icons";
import { Conta } from "./pages/conta";
import { Senha } from "./pages/conta/perfil/senha";
import { Perfil } from "./pages/conta/perfil";

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
                name="MainConta"
                component={ContasStackScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Conta",
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons
                            name={focused ? "key" : "person-outline"}
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
            <Stack.Screen name="Conta" component={Conta} />
            <Stack.Screen name="MainPerfil" component={ContaperfilStackScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

function ContaperfilStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Senha" component={Senha} />
        </Stack.Navigator>
    );
}
