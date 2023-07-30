import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Alarm({ setActiveScreen }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.alarmContainer} onPress={() => setActiveScreen('form')}>
      <Text style={{ fontSize: 16, textAlign: 'right' }}>13:30</Text>
        <TouchableOpacity style={styles.freqAndName} onPress={() => setActiveScreen('form')}>
          <TouchableOpacity style={styles.circle} onPress={() => setActiveScreen('form')}>
            <Text style={{ fontSize: 28 }}>1x</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 24 }}>Vitamina D</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, textAlign: 'right' }}>20min até o próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    marginTop: 20
  },
  alarmContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    height: 130,
    width: 324,
    padding: 20,
    backgroundColor: "#fff"
  },
  freqAndName: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  circle: {
    display: "flex",
    borderRadius: 100,
    backgroundColor: "#BCBCBC",
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  freqText: {
    fontSize: 28,
  },
  timeAndNext: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    minHeight: 60
  },
});
