import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TopBar from './src/presentation/components/TopBar';
import { Form } from './src/presentation/components/Form';
import Alarm from './src/presentation/components/Alarm';
import MedicinePreview from './src/presentation/components/MedicinePreview';
import CalendarComponent from './src/presentation/components/Calendar';
import { useMedicine } from './src/presentation/hooks/useMedicine';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('today');
  const { medicines, medicineToEdit, setMedicineToEditKey } =
    useMedicine(activeScreen);

  return (
    <View
      style={
        activeScreen === 'today' || activeScreen === 'medicines'
          ? styles.purpleBackground
          : styles.container
      }
    >
      <StatusBar style={styles.statusbar} />
      <TopBar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {activeScreen === 'today' ? (
        <Alarm
          setActiveScreen={setActiveScreen}
          medicines={medicines}
          setMedicineToEdit={setMedicineToEditKey}
        />
      ) : activeScreen === 'medicines' ? (
        <MedicinePreview
          setActiveScreen={setActiveScreen}
          medicines={medicines}
          setMedicineToEdit={setMedicineToEditKey}
        />
      ) : activeScreen === 'form' ? (
        <Form
          setActiveScreen={setActiveScreen}
          medicineToEdit={medicineToEdit}
        />
      ) : (
        <CalendarComponent />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  statusbar: {
    backgroundColor: '#0e0633',
  },
  purpleBackground: {
    backgroundColor: '#b286c1',
    height: '100%',
  },
});
