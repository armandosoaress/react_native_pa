
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import useStoragelogin from '../../hooks/useStoragelogin';
import { useNavigation } from '@react-navigation/native';

export function Person({ onLogout }) {
    const { removeItem } = useStoragelogin();
    const navigation = useNavigation(); // Obter o objeto de navegação
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <Image
                source={require('../../assets/profile.jpg')}
                style={styles.profile}
            />
            <TouchableOpacity style={styles.button} onPress={() => {
                removeItem('@userData');
                onLogout();
            }}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Inicio');
            }}>
                <Text style={styles.buttonText}>Voltar</Text>
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