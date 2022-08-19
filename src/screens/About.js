import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SocialIcon } from "react-native-elements";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Harshkumar Metkel</Text>
      <Text style={styles.desc}>
        I'm Full Stack Web Developer and React Native Developer
      </Text>
      <View style={styles.imgContainer}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          }}
        />
      </View>
      <View style={styles.subContent}>
        <Text style={[styles.name, { color: "#fff", textAlign: "center" }]}>
          About Me
        </Text>
        <Text style={[styles.desc, { color: "#fff" }]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          reiciendis dolorem incidunt modi minus quae nobis, corporis
          perferendis amet at, fugit in.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.name, { textAlign: "center" }]}>Follow Me</Text>
        <View style={styles.socials}>
          <SocialIcon
            style={{ width: 50 }}
            button={true}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/harshkumar-metkel-9a44731b6/"
              )
            }
            type="linkedin"
          />
          <SocialIcon
            style={{ width: 50 }}
            button={true}
            type="instagram"
            onPress={() =>
              Linking.openURL("https://www.instagram.com/harshmetkel24/")
            }
          />
          <SocialIcon
            style={{ width: 50 }}
            button={true}
            type="twitter"
            onPress={() => Linking.openURL("https://twitter.com/harshmetkel24")}
          />
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontFamily: "bold",
    fontSize: 36,
  },
  desc: {
    fontFamily: "medium",
    fontSize: 20,
    paddingVertical: 16,
    textAlign: "justify",
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  imgStyle: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 250,
  },
  subContent: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 16,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  footer: {
    justifyContent: "space-between",
  },
  socials: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
