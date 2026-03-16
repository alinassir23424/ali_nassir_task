import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "./constants/colors";

export default function Login() {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.logoBox}>
          <Text style={styles.logo}>Basmah</Text>
          <Text style={styles.logoArabic}>بصمة</Text>
        </View>

        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Choose how you want to continue</Text>

        <TextInput
          placeholder="Name / School name"
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
          <Text style={styles.schoolButtonText}>Login as School</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mainButton, styles.userButton]}
          onPress={() => router.push("/UserHome")}
        >
          <Text style={styles.userButtonText}>Login as User</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/SignUpScreen")}>
          <Text style={styles.link}>Don’t have an account? Sign up</Text>
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

  logoBox: {
    alignSelf: "center",
    backgroundColor: colors.white,
    paddingHorizontal: 36,
    paddingVertical: 12,
    borderRadius: 30,
    marginBottom: 22,
    alignItems: "center",
  },

  logo: {
    fontSize: 34,
    fontWeight: "800",
    color: colors.navy,
  },

  logoArabic: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.navy,
    marginTop: -2,
  },

  title: {
    fontSize: 28,
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