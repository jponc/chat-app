import { HelloRequest } from "chat-app-protos";
import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { apiClient } from "./services";

export const Main = () => {
  const [name, setName] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  useEffect(() => {
    (async () => {
      const req = new HelloRequest();
      req.setName(name);

      const res = await apiClient.hello(req, {});
      setResponse(res.getMessage());
    })();
  }, [name]);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">gRPC Test</Text>
      <TextInput
        label="Name"
        mode="outlined"
        value={name}
        onChangeText={(t) => setName(t)}
        style={{ width: "80%", marginVertical: 10 }}
      />
      <Text>gRPC Server Response: {response}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
