import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [feed, setFeed] = useState("");
  const [checked, setChecked] = useState(false);
  const submitHandler = () => {
    if (name && email && mobile && feed) {
      Alert.alert("Feedback Submitted!", "Thanks for the feedback");
      navigation.navigate("Home");
    } else {
      Alert.alert("Something Went Wrong!", "Please fill all the fields");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "medium", fontSize: 24, marginBottom: 16 }}>
        Level up your knowledge!
      </Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Enter your name</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
        <Text style={styles.label}>Enter your email</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
        <Text style={styles.label}>Enter your Mobile</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={mobile}
          onChangeText={setMobile}
          placeholder="Enter your mobile"
        />
        <Text style={styles.label}>How can we help you?</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={feed}
          onChangeText={setFeed}
          multiline
          placeholder="Enter your Feedback here"
          numberOfLines={5}
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 32, marginBottom: 16 }}>
        <Checkbox
          value={checked}
          onValueChange={setChecked}
          style={{ marginRight: 8 }}
          color="#24a0ed"
        />
        <Text>I have read and agree with T&C!</Text>
      </View>
      <TouchableOpacity
        disabled={!checked}
        onPress={submitHandler}
        style={{
          backgroundColor: checked ? "#24a0ed" : "#555",
          padding: 8,
          borderRadius: 8,
          alignSelf: "stretch",
        }}
      >
        <Text style={styles.btnStyle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  formContainer: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    padding: 6,
    borderRadius: 8,
    color: "#333",
    marginBottom: 24,
    fontFamily: "regular",
  },
  label: {
    fontFamily: "medium",
    fontSize: 18,
    paddingBottom: 8,
    textTransform: "capitalize",
  },
  btnStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    fontFamily: "bold",
  },
});

export default Contact;
