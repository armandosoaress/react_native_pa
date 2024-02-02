import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import useStoragelogin from '../../hooks/useStoragelogin';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as LocalAuthentication from 'expo-local-authentication';
import { Ionicons } from '@expo/vector-icons';

export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [biometria, setbiometria] = useState('false');
  const { getItem, saveItem } = useStoragelogin();
  const MySwal = withReactContent(Swal)

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
      MySwal.fire({
        title: <p>Preencha todos os campos</p>,
        icon: 'warning',
        position: 'top-end',
        confirmButtonText: 'Continuar',
      });
      return;
    }

    validateLogin(username, password);
  };

  const validateLogin = (username, password) => {
    const usernameBD = '1';
    const passwordBD = '2';

    if (username !== usernameBD || password !== passwordBD) {
      MySwal.fire({
        title: <p>Usuário ou senha inválidos</p>,
        icon: 'error',
        position: 'top-end',
        confirmButtonText: 'Continuar',
      });
    } else {
      onLogin();
      saveItem('@userData', {
        username: username,
        password: password
      });
    }
  }

  // funçao da biometria
  // const biometrics = async () => {
  //   const compatible = await LocalAuthentication.hasHardwareAsync();
  //   if (compatible) {
  //     setbiometria('true');
  //     const biometricRecords = await LocalAuthentication.isEnrolledAsync();
  //     if (!biometricRecords) {
  //       MySwal.fire({
  //         title: <p>Não há biometria cadastrada</p>,
  //         icon: 'warning',
  //         position: 'top-end',
  //         confirmButtonText: 'Continuar',
  //       });
  //       return;
  //     }
  //     const result = await LocalAuthentication.authenticateAsync({
  //       promptMessage: 'Faça Login para continuar'
  //     });
  //     if (result.success) {
  //       onLogin();
  //     }
  //   }
  // }
  // biometrics();
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

      {/* <View style={styles.biometrics}>
        {biometria === 'true' ? (
          <TouchableOpacity onPress={biometrics}>
            <Ionicons name="finger-print" size={50} color="black" />
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
    paddingTop: 180,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFCE00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 20,
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFCE00',
  },
  // biometrics: {
  //   width: '100%',
  //   height: 80,
  //   borderRadius: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // }
});
