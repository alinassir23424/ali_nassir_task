import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function BeSpeaker() {

return(

<View style={styles.screen}>

<View style={styles.card}>

<Text style={styles.title}>sign up to be a speaker</Text>

<View style={styles.row}>

<View style={styles.left}>

<TextInput
placeholder="name"
placeholderTextColor="#7D7D7D"
style={styles.input}
/>

<TextInput
placeholder="Email / phone number"
placeholderTextColor="#7D7D7D"
style={styles.input}
/>

<TextInput
placeholder="town / city"
placeholderTextColor="#7D7D7D"
style={styles.input}
/>

</View>

<View style={styles.storyBox}>
<Text style={styles.storyText}>your personal story / video</Text>
</View>

</View>

<TextInput
placeholder="topics in your story (drugs, crime, violence etc.)"
placeholderTextColor="#7D7D7D"
style={styles.topicInput}
/>

<TouchableOpacity style={styles.submit}>
<Text style={styles.submitText}>Submit</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>router.back()}>
<Text style={styles.back}>Back</Text>
</TouchableOpacity>

</View>

</View>

)
}

const styles=StyleSheet.create({

screen:{
flex:1,
backgroundColor:"#FFFFFF",
justifyContent:"center",
paddingHorizontal:14
},

card:{
backgroundColor:"#2EA9EA",
borderRadius:18,
borderWidth:5,
borderColor:"#1F1F1F",
paddingHorizontal:18,
paddingTop:18,
paddingBottom:20
},

title:{
color:"#FFFFFF",
fontSize:22,
fontWeight:"700",
marginBottom:18
},

row:{
flexDirection:"row",
justifyContent:"space-between",
marginBottom:14
},

left:{
width:"42%"
},

input:{
backgroundColor:"#F7F7F7",
borderRadius:999,
paddingVertical:10,
paddingHorizontal:16,
marginBottom:12
},

storyBox:{
width:"52%",
minHeight:180,
backgroundColor:"#F8F8F1",
borderRadius:24,
alignItems:"center",
justifyContent:"center",
padding:16
},

storyText:{
color:"#8A8A8A",
fontSize:16,
textAlign:"center"
},

topicInput:{
backgroundColor:"#F7F7F7",
borderRadius:999,
paddingVertical:10,
paddingHorizontal:16,
marginBottom:16
},

submit:{
alignSelf:"center",
backgroundColor:"#FFFFFF",
borderRadius:999,
paddingHorizontal:30,
paddingVertical:10,
marginBottom:10
},

submitText:{
color:"#6F6F6F",
fontWeight:"600"
},

back:{
textAlign:"center",
color:"#FFFFFF"
}

})