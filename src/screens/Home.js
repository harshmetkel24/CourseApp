import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Menu from "../components/Menu";

const Home = () => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita harum consequatur dolorum corrupti. Et rerum esse adipisci. Tempora consequuntur consequatur eveniet debitis? Est quod officiis id maxime sit repudiandae?";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/logo.jpeg")}
        />
        <Text style={[styles.headerText]}>Welcome to </Text>
        <Text
          style={[
            styles.headerText,
            {
              fontSize: 33,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}
        >
          Edureca
        </Text>
        <Text style={styles.paraStyle}>{description} </Text>
      </View>
      <Menu />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    textAlign: "center",
  },
  homeTop: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1.5,
    borderRadius: 16,
  },
  headerText: {
    marginTop: 32,
    fontSize: 30,
    textTransform: "uppercase",
    fontFamily: "bold",
    letterSpacing: 5,
  },
  paraStyle: {
    fontSize: 20,
    color: "#7d7d7d",
    marginVertical: 20,
    lineHeight: 30,
    textAlign: "justify",
    fontFamily: "regular",
  },
});
