import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddStory() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Add Your Story</Text>
        <Text style={styles.subtitle}>Share your experience and help others learn</Text>

        <View style={styles.contentRow}>
          <View style={styles.leftColumn}>
            <TextInput
              placeholder="Topics in your story"
              placeholderTextColor="#7D7D7D"
              style={styles.topicInput}
            />

            <TouchableOpacity style={styles.uploadBox}>
              <Text style={styles.uploadIcon}>▶</Text>
              <Text style={styles.uploadText}>Upload Video</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            placeholder="Write your personal story here..."
            placeholderTextColor="#9A8E98"
            multiline
            textAlignVertical="top"
            style={styles.storyBox}
          />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Story</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2EA9EA",
    justifyContent: "center",
    paddingHorizontal: 12,
  },

  card: {
    backgroundColor: "#2EA9EA",
    borderRadius: 22,
    borderWidth: 5,
    borderColor: "#1F1F1F",
    paddingHorizontal: 18,
    paddingTop: 22,
    paddingBottom: 24,
    minHeight: 560,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    color: "#DFF4FF",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 20,
  },

  contentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },

  leftColumn: {
    width: "41%",
  },

  topicInput: {
    backgroundColor: "#F7F7F7",
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 14,
    color: "#222222",
    fontSize: 14,
  },

  uploadBox: {
    flex: 1,
    backgroundColor: "#F8F8F1",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 260,
    padding: 16,
  },

  uploadIcon: {
    fontSize: 28,
    color: "#3858C8",
    marginBottom: 10,
  },

  uploadText: {
    color: "#6F6F6F",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  storyBox: {
    width: "54%",
    backgroundColor: "#F8F8F1",
    borderRadius: 28,
    paddingHorizontal: 18,
    paddingVertical: 16,
    color: "#333333",
    fontSize: 16,
    minHeight: 340,
  },

  addButton: {
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingHorizontal: 34,
    paddingVertical: 12,
    marginTop: 20,
    marginBottom: 10,
    minWidth: 170,
    alignItems: "center",
  },

  addButtonText: {
    color: "#214C9A",
    fontWeight: "800",
    fontSize: 18,
  },

  back: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
  },
});