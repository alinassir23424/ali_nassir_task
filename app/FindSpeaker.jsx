import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SpeakerCard from "./components/SpeakerCard";

const speakers = [
{
id:"1",
name:"micheal",
contact:"050-111-1111",
town:"Haifa",
topic:"Violence Prevention",
bio:"michael shares real stories about youth violence and how awareness changes lives."
},

{
id:"2",
name:"mike",
contact:"050-222-2222",
town:"Nazareth",
topic:"Crime Awareness",
bio:"mike explains the consequences of crime and how youth can choose better paths."
},

{
id:"3",
name:"rami",
contact:"050-333-3333",
town:"Jaffa",
topic:"Drug Recovery",
bio:"rami shares his recovery journey and inspires others to avoid addiction."
},

{
id:"4",
name:"sara",
contact:"050-444-4444",
town:"Jerusalem",
topic:"Life Change",
bio:"sara talks about resilience and how life can change after mistakes."
}
];

export default function FindSpeaker() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Find a Speaker</Text>

        <TextInput
          placeholder="Search speakers"
          placeholderTextColor="#7D7D7D"
          style={styles.search}
        />

        <FlatList
          data={speakers}
          numColumns={2}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
          renderItem={({ item }) => (
            <SpeakerCard
              name={item.name}
              contact={item.contact}
              town={item.town}
              topic={item.topic}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#2EA9EA",
    paddingHorizontal: 12,
    paddingTop: 12,
  },

  card: {
    flex: 1,
    backgroundColor: "#2EA9EA",
    borderRadius: 22,
    borderWidth: 5,
    borderColor: "#1F1F1F",
    paddingHorizontal: 14,
    paddingTop: 18,
    paddingBottom: 10,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 16,
  },

  search: {
    width: "72%",
    alignSelf: "center",
    backgroundColor: "#F7F7F7",
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 18,
    color: "#222222",
    fontSize: 16,
  },

  listContent: {
    paddingBottom: 16,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 2,
  },
});