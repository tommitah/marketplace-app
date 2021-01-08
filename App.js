import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
  Platform,
} from "react-native";

export default function App() {
  const handlePress = () => {
    Alert.alert("Title", "Message", [
      { text: "Yes", onPress: handleAlert(true) },
      { text: "No", onPress: handleAlert(false) },
    ]);
  };
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button title="Click me daddy" onPress={handlePress} color="dodgerblue" />
    </SafeAreaView>
  );
}

const handleAlert = (input) => {
  return input ? alert("You said yes!") : alert("You said no :(");
};

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
