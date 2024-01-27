
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { Login } from './src/pages/login';

export default function App() {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
