import { Text, StyleSheet, View } from "react-native";
//import { useContext } from "react";
//import { AuthContext } from "../context";
import { Button } from "react-native-paper";

export function Login({ navigation }) {
  function register() {
    navigation.replace("Register");
  }
  return (
    <View style={styles.container}>
      <Button onPress={register}>Register</Button>
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