import react from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, FlatList } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export function PasswordItem({ data, removePassword }) {

    async function handleeCopyPassword() {
        await Clipboard.setStringAsync(data);
        alert('Senha copiada com sucesso!')
    }

    return (
        <View style={styles.passwordArea}>
            <Text style={styles.password} onPress={handleeCopyPassword}>{data}</Text>
            <TouchableOpacity style={styles.buttonpass} onPress={() => removePassword(data)}>
                <Text style={styles.buttonText}>Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    passwordArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10
    },
    password: {
        fontSize: 18,
        color: '#000'
    },
    buttonpass: {
        backgroundColor: '#ff0000',
        padding: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})