import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function Alarm({
  setActiveScreen,
  medicines,
  setMedicineToEdit,
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={medicines}
        renderItem={({ item }) => {
          const startDate = new Date();
          const splittedTime = item.time.split(":");
          let endDate = new Date();
          endDate = new Date(
            endDate.setHours(
              parseInt(splittedTime[0]),
              parseInt(splittedTime[1]),
              0
            )
          );
          let difference = endDate.getTime() - startDate.getTime();
          difference = difference / 1000;
          let hourDifference = Math.floor(difference / 3600);
          difference -= hourDifference * 3600;
          let minuteDifference = Math.floor(difference / 60) + 1;
          return (
            <TouchableOpacity
              style={styles.alarmContainer}
              onPress={() => {
                setMedicineToEdit(item.name);
                setActiveScreen("form");
              }}
            >
              <Text style={{ fontSize: 16, textAlign: "right" }}>
                {item.time}
              </Text>
              <TouchableOpacity
                style={styles.freqAndName}
                onPress={() => {
                  setMedicineToEdit(item.name);
                  setActiveScreen("form");
                }}
              >
                <TouchableOpacity
                  style={styles.circle}
                  onPress={() => {
                    setMedicineToEdit(item.name);
                    setActiveScreen("form");
                  }}
                >
                  <Text style={{ fontSize: 28 }}>1x</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 24 }}>{item.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.timeTillNext}
                onPress={() => {
                  setMedicineToEdit(item.name);
                  setActiveScreen("form");
                }}
              >
                {hourDifference > 0 && (
                  <Text style={{ fontSize: 16, textAlign: "right" }}>
                    {hourDifference}h
                  </Text>
                )}
                <Text style={{ fontSize: 16, textAlign: "right" }}>
                  {minuteDifference}min até o próximo
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
  },
  alarmContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 140,
    width: 324,
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 2
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
    minHeight: 60,
  },
  timeTillNext: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    justifyContent: "flex-end",
  },
});
