import { router } from "expo-router";
import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const team = [
  { id: 1, name: "Aya", role: "UX" },
  { id: 2, name: "Alma", role: "UX" },
  { id: 3, name: "Zein", role: "PM" },
  { id: 4, name: "Naama", role: "UI" },
  { id: 5, name: "Ali", role: "DEV" },
];

const stories = [
  {
    id: "1",
    topic: "Violence Prevention",
    text: "A real story about how one decision can change a teenager’s future.",
  },
  {
    id: "2",
    topic: "Crime Awareness",
    text: "A short experience showing the consequences of crime and bad company.",
  },
  {
    id: "3",
    topic: "Drug Recovery",
    text: "A personal journey about addiction, recovery, and second chances.",
  },
  {
    id: "4",
    topic: "Life Change",
    text: "A story about learning from mistakes and choosing a better path.",
  },
];

function StoryCard({ topic, text }) {
  return (
    <View style={styles.storyCard}>
      <View style={styles.storyTop}>
        <View style={styles.storyIcon}>
          <Text style={styles.storyIconText}>▶</Text>
        </View>

        <View style={styles.storyBadge}>
          <Text style={styles.storyBadgeText}>{topic}</Text>
        </View>
      </View>

      <Text style={styles.storyText}>{text}</Text>

      <TouchableOpacity style={styles.storyButton}>
        <Text style={styles.storyButtonText}>View Story</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function UserHome() {
  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.card}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.topButton}
            onPress={() => router.push("/BeSpeaker")}
          >
            <Text style={styles.topButtonText}>Be a Speaker</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.topButton, styles.topButtonAlt]}
            onPress={() => router.push("/AddStory")}
          >
            <Text style={styles.topButtonAltText}>Add Story</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.aboutBox}>
          <Text style={styles.aboutTitle}>About Basmah</Text>
          <Text style={styles.aboutText}>
            Basmah is a storytelling platform where real experiences help youth
            understand the consequences of violence, crime, addiction, and life
            choices through authentic personal stories.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Stories</Text>

          <TouchableOpacity style={styles.smallAction}>
            <Text style={styles.smallActionText}>Explore More</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storyScroll}
        >
          {stories.map((story) => (
            <StoryCard key={story.id} topic={story.topic} text={story.text} />
          ))}
        </ScrollView>

        <Text style={styles.teamTitle}>Our Team</Text>

        <View style={styles.teamRow}>
          {team.map((member) => (
            <View key={member.id} style={styles.memberBox}>
              <View style={styles.circle}>
                <Text style={styles.circleLetter}>
                  {member.name.charAt(0)}
                </Text>
              </View>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2EA9EA",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  card: {
    flex: 1,
    backgroundColor: "#2EA9EA",
    borderRadius: 22,
    borderWidth: 5,
    borderColor: "#1F1F1F",
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  topButton: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: "center",
  },

  topButtonAlt: {
    backgroundColor: "#DFF4FF",
  },

  topButtonText: {
    color: "#214C9A",
    fontSize: 20,
    fontWeight: "800",
  },

  topButtonAltText: {
    color: "#3858C8",
    fontSize: 20,
    fontWeight: "800",
  },

  aboutBox: {
    backgroundColor: "#F8F8F1",
    borderRadius: 28,
    minHeight: 135,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },

  aboutTitle: {
    color: "#D38AAF",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },

  aboutText: {
    color: "#4A4A4A",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 22,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
  },

  smallAction: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },

  smallActionText: {
    color: "#214C9A",
    fontSize: 12,
    fontWeight: "700",
  },

  storyScroll: {
    paddingBottom: 12,
  },

  storyCard: {
    width: 220,
    backgroundColor: "#F8F8F1",
    borderRadius: 24,
    padding: 16,
    marginRight: 12,
    minHeight: 220,
    justifyContent: "space-between",
  },

  storyTop: {
    marginBottom: 10,
  },

  storyIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#DFF4FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  storyIconText: {
    color: "#3858C8",
    fontSize: 20,
    fontWeight: "800",
  },

  storyBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#EAF3FF",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  storyBadgeText: {
    color: "#214C9A",
    fontSize: 12,
    fontWeight: "700",
  },

  storyText: {
    color: "#555",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
  },

  storyButton: {
    alignSelf: "flex-start",
    backgroundColor: "#214C9A",
    borderRadius: 18,
    paddingVertical: 9,
    paddingHorizontal: 16,
  },

  storyButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },

  teamTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 14,
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
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#3858C8",
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  circleLetter: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
  },

  memberName: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },

  memberRole: {
    color: "#DFF4FF",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 2,
  },
});