import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { formatDate } from "./Form";

export default function MedicinePreview({
  setActiveScreen,
  medicines,
  setMedicineToEdit,
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={medicines}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.medicineContainer}
            onPress={() => {
              setMedicineToEdit(item.name);
              setActiveScreen("form");
            }}
          >
            <TouchableOpacity
              style={styles.nameAndInfos}
              onPress={() => {
                setMedicineToEdit(item.name);
                setActiveScreen("form");
              }}
            >
              <Text style={{ fontSize: 24, textAlign: "right" }}>
                {item.name}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setMedicineToEdit(item.name);
                  setActiveScreen("form");
                }}
              >
                <TouchableOpacity
                  style={styles.fieldValue}
                  onPress={() => {
                    setMedicineToEdit(item.name);
                    setActiveScreen("form");
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: "right",
                      fontWeight: "bold",
                    }}
                  >
                    Horários: 
                  </Text>
                  <Text style={{ fontSize: 16, textAlign: "right" }}>
                    {item.time}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.fieldValue}
                  onPress={() => {
                    setMedicineToEdit(item.name);
                    setActiveScreen("form");
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: "right",
                      fontWeight: "bold",
                    }}
                  >
                    Frequência: 
                  </Text>
                  <Text style={{ fontSize: 16, textAlign: "right" }}>
                    Todos os dias
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.fieldValue}
                  onPress={() => {
                    setMedicineToEdit(item.name);
                    setActiveScreen("form");
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      textAlign: "right",
                      fontWeight: "bold",
                    }}
                  >
                    Repor em: 
                  </Text>
                  <Text style={{ fontSize: 16, textAlign: "right" }}>
                    {formatDate(new Date(item.lastQuantityUpdate + item.currentQuantity * 24 * 60 * 60 * 1000))}
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                setMedicineToEdit(item.name);
                setActiveScreen("form");
              }}
            >
              <TouchableOpacity
                style={styles.editIcon}
                onPress={() => {
                  setMedicineToEdit(item.name);
                  setActiveScreen("form");
                }}
              >
                <FontAwesomeIcon icon={faEdit} style={{ color: "#000000" }} size={20}/>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setMedicineToEdit(item.name);
                  setActiveScreen("form");
                }}
              >
                <Text style={styles.moreInfos}>Mais infos</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        onPress={() => {
          setMedicineToEdit('');
          setActiveScreen("form");
        }}
        style={styles.addIconContainer}
      >
        <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} size={55}/>
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
    marginTop: 5,
    height: '70%'
  },
  medicineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 324,
    height: 150,
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 2
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
  },
  addIconContainer: {
    backgroundColor: "#bbe3bc",
    width: 60,
    height: 60,
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 'auto',
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  }
});
