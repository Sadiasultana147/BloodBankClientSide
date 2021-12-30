import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/Components/Navigation/StackNavigator';
import OnBoardScreen from './src/Components/Screen/OnBoardScreen/OnBoardScreen';
import FlashScreen from './src/Flash/FlashScreen';

export default function App() {
  return (
    <View>

      <StatusBar backgroundColor='white' />
      <View style={styles.main} >

        <NavigationContainer>

          <StackNavigator />
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%"
  }
});
