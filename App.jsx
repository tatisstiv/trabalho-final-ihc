import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import TopBar from './src/presentation/components/TopBar';
import { getData } from './src/storage/async-storage-functions';
import { Form } from './src/presentation/components/Form';
import Alarm from './src/presentation/components/Alarm';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('today');

  return (
    <View style={styles.container}>
    <StatusBar style={styles.statusbar} />
    <TopBar activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>
    <Alarm />
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
