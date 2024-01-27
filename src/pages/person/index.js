
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import useStoragelogin from '../../hooks/useStoragelogin';



export function Person() {
    const { removeItem } = useStoragelogin();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>{/* links da img https://media.licdn.com/dms/image/D4D03AQFFkkv_9Ib4Pw/profile-displayphoto-shrink_400_400/0/1675859871811?e=1711584000&v=beta&t=kk_zxRJCLaCBJ10GaAJdbPgC2-xKk_eqKzumIe_45kU */}
            <Image
                source={require('../../assets/profile.jpg')}
                style={styles.profile}
            />
            <TouchableOpacity style={styles.button} onPress={() => {
                removeItem('@userData');
                navigation.navigate('Login');
            }}>
                <Text style={styles.buttonText}>Sair</Text>
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