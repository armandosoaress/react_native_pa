import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, FlatList } from 'react-native';

export function Passwords() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Segunda pagina
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
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
    },
})