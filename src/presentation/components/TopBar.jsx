import { StyleSheet, Text, View, Image } from "react-native";

export default function TopBar() {
  return (
    <View style={styles.container}>
      <View style={styles.topBarItem}>
        <Image source={require("../assets/clock_icon_filled.png")} />
        <Text>Hoje</Text>
      </View>
      <View style={styles.topBarItem}>
        <Image source={require("../assets/pill_icon.png")} />
        <Text>Remédios</Text>
      </View>
      <View style={styles.topBarItem}>
        <Image source={require("../assets/calendar_icon.png")} />
        <Text>Calendário</Text>
      </View>
      <View style={styles.topBarItem}>
        <Image source={require("../assets/sync_icon.png")} />
        <Text>Sincronização</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 40,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#d9d9d9",
    height: "84px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topBarItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
