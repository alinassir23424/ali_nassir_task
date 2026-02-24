import { StyleSheet, Text, View } from "react-native";

export default function Card({ title, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
