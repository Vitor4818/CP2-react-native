import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigatorContainer from './src/Container';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigatorContainer>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      </NavigatorContainer>
      <StatusBar style="auto" />
    </View>
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
