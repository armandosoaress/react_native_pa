
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { ModalPassword } from '../../components/modal/index';

export  function Home() {
  const [size, setSize] = useState(10);
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

      <View style={styles.area}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={20}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="red"
          thumbTintColor="yellow"
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => generatePass(size)}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={ModalVisible}>
        <ModalPassword  password={password}  handleeModal={() => setModalVisible(false)} />
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
  slider: {
    height: 50,
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



