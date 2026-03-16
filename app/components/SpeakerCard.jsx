import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SpeakerCard({
  name,
  contact,
  town,
  topic,
  bio
}) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{name.charAt(0)}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.topic}>{topic}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Town:</Text>
        <Text style={styles.value}>{town}</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Contact:</Text>
        <Text style={styles.value}>{contact}</Text>
      </View>

      <Text style={styles.bio}>{bio}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  card:{
    width:"48%",
    backgroundColor:"#F8F8F1",
    borderRadius:22,
    padding:14,
    marginBottom:14,
    alignItems:"center"
  },

  avatar:{
    width:50,
    height:50,
    borderRadius:25,
    backgroundColor:"#3858C8",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:8
  },

  avatarText:{
    color:"#fff",
    fontSize:20,
    fontWeight:"bold"
  },

  name:{
    fontSize:18,
    fontWeight:"800",
    color:"#214C9A",
    marginBottom:4
  },

  topic:{
    fontSize:13,
    color:"#666",
    marginBottom:10,
    textAlign:"center"
  },

  infoRow:{
    flexDirection:"row",
    marginBottom:4
  },

  label:{
    fontWeight:"700",
    fontSize:12,
    color:"#3858C8",
    marginRight:4
  },

  value:{
    fontSize:12,
    color:"#444"
  },

  bio:{
    fontSize:12,
    textAlign:"center",
    color:"#666",
    marginVertical:8
  },

  button:{
    marginTop:6,
    backgroundColor:"#214C9A",
    borderRadius:16,
    paddingVertical:6,
    paddingHorizontal:14
  },

  buttonText:{
    color:"#fff",
    fontSize:12,
    fontWeight:"700"
  }

});