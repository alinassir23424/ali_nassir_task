import { StatusBar } from "expo-status-bar";
import Dashboard from "./screens/Dashboard";

export default function HomeScreen() {
  return (
    <>
      <Dashboard />
      <StatusBar style="auto" />
    </>
  );
}
