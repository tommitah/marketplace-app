import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>Yellow world.... </Text>

      <Image
        source={{
          width: 300,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
