import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import DateTimePicker from "@react-native-community/datetimepicker";
import { removeValue, storeData } from "../../storage/async-storage-functions";
import { useState } from "react";

import { DaysItem } from "./DaysItem";

export function formatDate(date) {
  console.log(date)
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  return day + "/" + month + "/" + year;
}

const daysData = [
  {
    id: "dom",
    title: "D",
  },
  {
    id: "seg",
    title: "S",
  },
  {
    id: "ter",
    title: "T",
  },
  {
    id: "qua",
    title: "Q",
  },
  {
    id: "qui",
    title: "Q",
  },
  {
    id: "sex",
    title: "S",
  },
  {
    id: "sab",
    title: "S",
  },
];

export function Form({ setActiveScreen, medicineToEdit }) {
  const [start, setStart] = useState(new Date());
  const [showStart, setShowStart] = useState(false);
  const [selected, setSelected] = useState(medicineToEdit.days);

  const showStartDatePicker = () => {
    setShowStart(true);
  };

  return (
    <View style={{ padding: 10 }}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setActiveScreen("medicines")}
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#000000" }} />
        <Text style={{ fontSize: 20 }}>Voltar</Text>
      </TouchableOpacity>
      <Formik
        initialValues={{
          ...medicineToEdit,
          start: new Date(medicineToEdit.start),
          lastQuantityUpdate: new Date(medicineToEdit.lastQuantityUpdate),
        }}
        onSubmit={(values) => {
          console.log(values)
          storeData(values.name, values);
          setActiveScreen("medicines");
        }}
        enableReinitialize
      >
        {({ handleChange, handleSubmit, values, setFieldValue }) => (
          <View style={styles.container}>
            <View style={styles.fieldAndValue}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Remédio:{" "}
              </Text>
              <TextInput
                style={styles.nameInput}
                value={values.name}
                onChangeText={handleChange("name")}
              />
            </View>
            <View style={styles.fieldAndValue}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Início: </Text>
              <TouchableOpacity onPress={showStartDatePicker}>
                <Text style={{ fontSize: 20 }}>{formatDate(values.start)}</Text>
              </TouchableOpacity>
              {showStart && (
                <DateTimePicker
                  style={{
                    width: 200,
                    alignSelf: "center",
                    borderColor: "black",
                    borderWidth: 1,
                  }}
                  date={start}
                  mode="date"
                  display="calendar"
                  placeholder="select date"
                  format="DD MMM YYYY"
                  minDate="01 Jan 2021"
                  maxDate="30 Dec 2025"
                  confirmBtnText="Confirmar"
                  cancelBtnText="Cancelar"
                  onChange={(event, newStart) => {
                    setFieldValue("start", newStart);
                    setShowStart(false);
                  }}
                  value={values.start}
                />
              )}
            </View>
            <View style={styles.fieldAndValue}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Dias: </Text>
              <SafeAreaView style={styles.daysContainer}>
                <FlatList
                  data={daysData}
                  horizontal
                  renderItem={({ item }) => (
                    <DaysItem
                      id={item.id}
                      title={item.title}
                      selected={!!values.days.includes(item.id)}
                      onSelect={(id) => {
                        if (selected.includes(item.id)) {
                          setFieldValue(
                            "days",
                            selected.filter((day) => day != item.id)
                          );
                          setSelected(selected.filter((day) => day != item.id));
                        } else {
                          setFieldValue("days", [...selected, id]);
                          setSelected([...selected, id]);
                        }
                      }}
                    />
                  )}
                  keyExtractor={(item) => item.id}
                  extraData={selected}
                />
              </SafeAreaView>
            </View>
            <View style={styles.fieldAndValue}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Horários:
              </Text>
              <TextInput
                style={styles.timeInput}
                value={values.time}
                onChangeText={handleChange("time")}
              />
            </View>
            <View style={styles.fieldAndValue}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Dose: </Text>
              <TextInput
                style={styles.dosageInput}
                value={values.dosage}
                onChangeText={handleChange("dosage")}
              />
              <Text> comprimido(s)</Text>
            </View>
            <View style={styles.fieldAndValue}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Quantidade atual:{" "}
              </Text>
              <TextInput
                style={styles.dosageInput}
                value={values.currentQuantity}
                onChangeText={(text) => {
                  setFieldValue('currentQuantity', text);
                  setFieldValue('lastQuantityUpdate', new Date().setHours(0, 0, 0));
                  }}
              />
              <Text> comprimido(s)</Text>
            </View>
            <View style={styles.fieldAndValue}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Dias até Notificação:{" "}
              </Text>
              <TextInput
                style={styles.daysToNotifyInput}
                value={values.daysToNotify}
                onChangeText={handleChange("daysToNotify")}
              />
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.actionButton}
            >
              <FontAwesomeIcon icon={faCheck} style={{ color: "#1F8F3D" }} />
              <Text style={{ color: "#1F8F3D", fontSize: 20 }}>
                Salvar alterações
              </Text>
            </TouchableOpacity>
            {medicineToEdit.name.length > 0 && (
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => {
                  removeValue(values.name);
                  setActiveScreen("medicines");
                }}
              >
                <FontAwesomeIcon
                  icon={faTrashCan}
                  style={{ color: "#E34848" }}
                />
                <Text style={{ color: "#E34848", fontSize: 20 }}>
                  Excluir remédio
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  nameInput: {
    borderColor: "black",
    borderWidth: 1,
    width: 206,
    paddingLeft: 5,
    fontSize: 20,
  },
  startInput: {
    borderColor: "black",
    borderWidth: 1,
    width: 155,
  },
  timeInput: {
    borderColor: "black",
    borderWidth: 1,
    width: 84,
    paddingLeft: 5,
    marginLeft: 5,
    fontSize: 20,
  },
  dosageInput: {
    borderColor: "black",
    borderWidth: 1,
    width: 50,
    paddingLeft: 5,
    fontSize: 20,
  },
  daysToNotifyInput: {
    borderColor: "black",
    borderWidth: 1,
    width: 70,
    paddingLeft: 5,
    fontSize: 20,
  },
  fieldAndValue: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  actionButton: {
    display: "flex",
    flexDirection: "row",
    width: 224,
    height: 46,
    backgroundColor: "#d9d9d9",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    gap: 10,
    marginTop: 10,
  },
  backButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    marginBottom: 5,
  },
});
