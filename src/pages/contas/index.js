import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importando useNavigation

export function Contas() {
    const navigation = useNavigation(); // Obtendo a instância de navegação

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Página de contas
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Contas1')}>
                <Text style={styles.buttonText}>Contas 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Contas2')}>
                <Text style={styles.buttonText}>Contas 2</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: '#000',
        marginBottom: 60,
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 60,
    },
    text: {
        fontSize: 20,
        color: '#000',
        marginBottom: 10,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#000',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});
