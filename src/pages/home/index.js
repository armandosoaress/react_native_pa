
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react';
import { ModalPassword } from '../../components/modal/index';
import { RangeInput } from './components/rangeInput';

export function Home() {
  const [size, setSize] = useState(5);
  const [password, setPassword] = useState('');
  const [ModalVisible, setModalVisible] = useState(false);

  const generatePass = () => {
    let pass = '';
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let num = '0123456789';

    for (let i = 0; i < size; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(pass);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}> {size} Caracteres</Text>

      <View>
        <RangeInput value={size} onChange={(valorSelecionado) => setSize(valorSelecionado)} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => generatePass(size)}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={ModalVisible}>
        <ModalPassword password={password} handleeModal={() => setModalVisible(false)} />
      </Modal>

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
  logo: {
    marginBottom: 60,
  },
  area: {
    width: "80%",
    marginTop: 14,
    marginBottom: 14,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25,
  },
});



