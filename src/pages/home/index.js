
import { StyleSheet, Text, View } from 'react-native';

export function Home() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pagina inicial
      </Text>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});



