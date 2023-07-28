import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './src/presentation/components/TopBar';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style={styles.statusbar} />
    <TopBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  statusbar: {
    backgroundColor: '#0e0633'
  }
});
