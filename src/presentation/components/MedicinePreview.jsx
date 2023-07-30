import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";

export default function MedicinePreview({ setActiveScreen }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.medicineContainer} onPress={() => setActiveScreen('form')}>
        <TouchableOpacity style={styles.nameAndInfos} onPress={() => setActiveScreen('form')}>
          <Text style={{ fontSize: 24, textAlign: "right" }}>Vitamina D</Text>
          <TouchableOpacity onPress={() => setActiveScreen('form')}>
            <TouchableOpacity style={styles.fieldValue} onPress={() => setActiveScreen('form')}>
              <Text
                style={{ fontSize: 16, textAlign: "right", fontWeight: "bold" }}
              >
                Horários: 
              </Text>
              <Text style={{ fontSize: 16, textAlign: "right" }}>13:30</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fieldValue} onPress={() => setActiveScreen('form')}>
              <Text
                style={{ fontSize: 16, textAlign: "right", fontWeight: "bold" }}
              >
                Frequência: 
              </Text>
              <Text style={{ fontSize: 16, textAlign: "right" }}>
                Todos os dias
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fieldValue} onPress={() => setActiveScreen('form')}>
              <Text
                style={{ fontSize: 16, textAlign: "right", fontWeight: "bold" }}
              >
                Repor em: 
              </Text>
              <Text style={{ fontSize: 16, textAlign: "right" }}>
                13/08/2023
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setActiveScreen('form')}>
          <TouchableOpacity style={styles.editIcon} onPress={() => setActiveScreen('form')}>
            <FontAwesomeIcon icon={faEdit} style={{ color: "#000000" }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveScreen('form')}>
            <Text style={styles.moreInfos}>Mais infos</Text>
          </TouchableOpacity>
        </TouchableOpacity>
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
  medicineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 324,
    height: 150,
    padding: 20,
    backgroundColor: "#fff"
  },
  nameAndInfos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  fieldValue: {
    display: "flex",
    flexDirection: "row",
  },
  moreInfos: {
    color: "#167670",
    textDecorationLine: "underline",
  },
  editIcon: {
    display: "flex",
    borderRadius: 100,
    backgroundColor: "#d9d9d9",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  }
});
