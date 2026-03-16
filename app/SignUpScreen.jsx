import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "./constants/colors";

export default function SignUpScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Create Your Account</Text>
        <Text style={styles.subtitle}>Join Basmah and start sharing impact</Text>

        <TextInput
          placeholder="Full name"
          placeholderTextColor="#777"
          style={styles.input}
        />

        <TextInput
          placeholder="Email / Phone number"
          placeholderTextColor="#777"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#777"
          style={styles.input}
        />

        <TouchableOpacity
          style={[styles.mainButton, styles.schoolButton]}
          onPress={() => router.push("/SchoolHome")}
        >
          <Text style={styles.schoolButtonText}>Sign up as School</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mainButton, styles.userButton]}
          onPress={() => router.push("/UserHome")}
        >
          <Text style={styles.userButtonText}>Sign up as User</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  card: {
    width: "94%",
    backgroundColor: colors.background,
    borderWidth: 5,
    borderColor: colors.panelBorder,
    borderRadius: 24,
    padding: 22,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.white,
    textAlign: "center",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
    marginBottom: 22,
  },

  input: {
    backgroundColor: colors.softWhite,
    borderRadius: 999,
    paddingVertical: 14,
    paddingHorizontal: 18,
    fontSize: 16,
    marginBottom: 14,
    color: colors.textDark,
  },

  mainButton: {
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },

  schoolButton: {
    backgroundColor: colors.buttonSchool,
  },

  userButton: {
    backgroundColor: colors.buttonUser,
  },

  schoolButtonText: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.navy,
  },

  userButtonText: {
    fontSize: 18,
    fontWeight: "800",
    color: colors.accent,
  },

  link: {
    textAlign: "center",
    color: colors.white,
    fontSize: 16,
    marginTop: 18,
    fontWeight: "600",
  },
});