import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const team = [
  { id: 1, name: "Aya", role: "UX" },
  { id: 2, name: "Alma", role: "UX" },
  { id: 3, name: "Zein", role: "PM" },
  { id: 4, name: "Naama", role: "UI" },
  { id: 5, name: "Ali", role: "DEV" },
];

export default function SchoolHome() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.topButton}
          onPress={() => router.push("/FindSpeaker")}
        >
          <Text style={styles.topButtonText}>Find Speakers</Text>
        </TouchableOpacity>

        <View style={styles.aboutBox}>
          <Text style={styles.aboutTitle}>About Basmah</Text>
          <Text style={styles.aboutText}>
            A platform that connects schools with real speakers who share true
            life stories to raise awareness and prevent youth violence and crime.
          </Text>
        </View>

        <Text style={styles.teamTitle}>Our Team</Text>

        <View style={styles.teamRow}>
          {team.map((member) => (
            <View key={member.id} style={styles.memberBox}>
              <View style={styles.circle}>
                <Text style={styles.circleLetter}>{member.name.charAt(0)}</Text>
              </View>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
            </View>
          ))}
        </View>
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
  },

  topButton: {
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 28,
    marginBottom: 20,
    minWidth: 220,
    alignItems: "center",
  },

  topButtonText: {
    color: "#214C9A",
    fontSize: 22,
    fontWeight: "800",
  },

  aboutBox: {
    backgroundColor: "#F8F8F1",
    borderRadius: 28,
    minHeight: 190,
    justifyContent: "center",
    marginBottom: 24,
    paddingHorizontal: 22,
    paddingVertical: 20,
  },

  aboutTitle: {
    color: "#D38AAF",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },

  aboutText: {
    color: "#4A4A4A",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },

  teamTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 16,
  },

  teamRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  memberBox: {
    width: "18%",
    alignItems: "center",
  },

  circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#3858C8",
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  circleLetter: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
  },

  memberName: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
  },

  memberRole: {
    color: "#DFF4FF",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 2,
  },
});