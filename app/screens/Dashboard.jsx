import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";



const API_KEY = "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"; // put your Hugging Face API key here

export default function Dashboard() {
  // State
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [apiResult, setApiResult] = useState(""); // <-- state to show API result

 

  // Async function to call Hugging Face
 async function testAPI() {
  try {
    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-ai/DeepSeek-V3-0324",
          messages: [
            {
              role: "user",
              content: "Say something motivational about changing my life.",
            },
          ],
          max_tokens: 100,
        }),
      }
    );

    const data = await response.json();
    console.log("API result:", data);

    const message = data.choices[0].message.content;
    setApiResult(message);

  } catch (error) {
    console.log("API error:", error);
    setApiResult("Error calling API 😢");
  }
}

  // Effect (runs once)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={darkMode ? styles.dark : styles.light}>
      <Text style={styles.title}>DailyDash</Text>
      <Text style={styles.time}>Current Time: {time}</Text>
      <Input placeholder="Enter your name" value={name} onChangeText={setName} />
      
      <Button text="Test API" onPress={testAPI} />
      <Button text="Toggle Dark Mode" onPress={() => setDarkMode(!darkMode)} />

      <View style={styles.cards}>
        <Card title="Welcome">
          {name ? `Hello, ${name}! 👋` : "Please enter your name"}
        </Card>

        <Card title="Daily Reminder">
          Stay consistent. Small steps every day 🚀
        </Card>

        <Card title="API Result">
          <Text>{apiResult}</Text>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  light: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  dark: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4a90e2",
  },
  time: {
    marginBottom: 15,
    fontSize: 16,
  },
  cards: {
    marginTop: 20,
    gap: 15,
  },
});
