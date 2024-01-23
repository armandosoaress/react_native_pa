import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage'
import { PasswordItem } from './components/passwordItem';

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([]);
    const focused = useIsFocused();
    const { getItem, deleteItem } = useStorage();

    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem('@pass');
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focused])

    async function handleeRemovePassword(password) {
        const passwords = await deleteItem('@pass', password);
        setListPasswords(passwords);
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
                <View style={styles.content}>
                    <FlatList style={styles.list}
                        data={listPasswords}
                        keyExtractor={(item) => String(item)}
                        renderItem={({ item }) => (
                            <PasswordItem data={item} removePassword={() => handleeRemovePassword(item)} />
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    content: {
        padding: 20
    },
    list: {
        paddingTop: 20
    },
})