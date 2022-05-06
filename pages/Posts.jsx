import { FlatList, Text, StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useEffect, useState } from "react";
import axios from "axios";

export function Posts() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    GetPosts();
  }, []);
  async function GetPosts() {
    setLoading(true);
    try {
      const { data } = await axios.get("/posts");
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  async function CreatePost() {
    setLoading(true);
    try {
      const { data } = await axios.post("/posts", { content: post });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setPost("");
    GetPosts();
    setLoading(false);
  }
  return (
    <View style={styles.container}>
      <TextInput
        multiline
        style={{ backgroundColor: "#f3f3f3" }}
        label={"Post"}
        value={post}
        onChangeText={setPost}
      />
      <Button loading={loading} onPress={CreatePost}>
        Crear
      </Button>
      <FlatList
        refreshing={loading}
        onRefresh={GetPosts}
        data={posts}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => <Text>{item.content}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
});