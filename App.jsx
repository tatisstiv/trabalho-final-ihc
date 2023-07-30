import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TopBar from "./src/presentation/components/TopBar";
import { getData } from "./src/storage/async-storage-functions";
import { Form } from "./src/presentation/components/Form";
import Alarm from "./src/presentation/components/Alarm";
import MedicinePreview from "./src/presentation/components/MedicinePreview";
import CalendarComponent from "./src/presentation/components/Calendar";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("today");

  return (
    <View
      style={
        activeScreen === "today" || activeScreen === "medicines"
          ? styles.purpleBackground
          : styles.container
      }
    >
      <StatusBar style={styles.statusbar} />
      <TopBar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {activeScreen === "today" ? (
        <Alarm setActiveScreen={setActiveScreen} />
      ) : activeScreen === "medicines" ? (
        <MedicinePreview setActiveScreen={setActiveScreen} />
      ) : activeScreen === "form" ? (
        <Form setActiveScreen={setActiveScreen} />
      ) :
      <CalendarComponent />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  statusbar: {
    backgroundColor: "#0e0633",
  },
  purpleBackground: {
    backgroundColor: "#b286c1",
    height: "100%",
  },
});
