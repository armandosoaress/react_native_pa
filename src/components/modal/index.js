import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import * as Clipboard from 'expo-clipboard';
import useStorage from '../../hooks/useStorage'

export function ModalPassword({ password, handleeModal }) {

    const { saveItem } = useStorage();

    async function handleeCopyPassword() {
        await Clipboard.setStringAsync(password);
        saveItem('@pass', password);
        handleeModal();
        alert('Senha copiada com sucesso!')
    }


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>
                <Pressable onLongPress={handleeCopyPassword}>
                    <Text style={styles.password}>
                        {password}
                    </Text>
                </Pressable>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.buttonpass} onPress={handleeModal}>
                        <Text style={styles.buttonText}>Fechar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonpass} onPress={handleeCopyPassword}>
                        <Text style={styles.buttonText}>Salvar senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '90%',
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    password: {
        textAlign: 'center',
        backgroundColor: '#f3f3f3',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },
    buttonArea: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonpass: {
        backgroundColor: '#FFA200',
        padding: 10,
        borderRadius: 5,
        width: '40%'
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
})