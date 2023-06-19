import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginscreen from './screens/loginscreen';
import homescreen from './screens/homescreen';
import signupscreen from './screens/signupscreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options = {{headerShown: false}} name="Login" component={loginscreen} /> 
        <Stack.Screen options = {{headerShown: false}} name="Home" component={homescreen} /> 
        <Stack.Screen options = {{headerShown: false}} name="SU" component={signupscreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
