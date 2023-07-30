import {
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export function DaysItem({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#cccccc' : '#ffffff' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 5
  },
  title: {
    fontSize: 20
  }
});