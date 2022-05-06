import { Text, StyleSheet, View } from "react-native";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context";
import { Button } from "react-native-paper";
import axios from "axios";

export function Profile() {
  const { setAuth } = useContext(AuthContext);
  const [user, setuser] = useState({});
  useEffect(getuser, []);
  function getuser() {
    axios
      .get("/auth/me")
      .then(({ data }) => {
        setuser(data.user);
      })
      .catch((error) => {
        console.log("profile - error - /auth/me");
      });
  }
  function logOut() {
    setAuth({ isAuth: false });
  }
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(user, null, 2)}</Text>
      <Button onPress={getuser}>Get User</Button>
      <Button onPress={logOut}>Log Out</Button>
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