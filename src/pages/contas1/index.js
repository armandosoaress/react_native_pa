
import { StyleSheet, Text, View } from 'react-native';

export function Contas1() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Pagina de contas 1
            </Text>
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
    },
});



