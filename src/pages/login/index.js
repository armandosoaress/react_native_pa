import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import useStoragelogin from '../../hooks/useStoragelogin';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { getItem, saveItem } = useStoragelogin();
  const navigation = useNavigation(); // Obter o objeto de navegação

  const checkLogin = async () => {
    const userData = await getItem('@userData');
    if (Object.keys(userData).length > 0) {
      validateLogin(userData.username, userData.password);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const handleLogin = async () => {

    if (!username || !password) {
      alert('Preencha todos os campos');
      return;
    }

    validateLogin(username, password);
  };

  const validateLogin = (username, password) => {
    const usernameBD = '1';
    const passwordBD = '2';

    if (username !== usernameBD || password !== passwordBD) {
      alert('Usuário ou senha inválidos');
    } else {
      onLogin();
      saveItem('@userData', {
        username: username,
        password: password
      });
      navigation.navigate('Inicio');
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        placeholderTextColor="#A8A8A8"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#A8A8A8"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPassword} onPress={() => console.log('Esqueci minha senha')}>
        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#323232',
    borderRadius: 8,
    color: '#FFFFFF',
    fontSize: 16,
    height: 48,
    marginBottom: 16,
    paddingHorizontal: 16,
    width: 300,
  },
  loginButton: {
    alignItems: 'center',
    backgroundColor: '#04D361',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    width: 300,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 16,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
