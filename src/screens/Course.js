import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import CoursesData from "../api/Course";

const Course = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={CoursesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={item.image}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View>
              <TouchableOpacity
                style={styles.btnStyle}
                onPress={() => navigation.navigate("CourseDetails")}
              >
                <Text style={styles.btnText}>Course Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {/* <Menu /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  cardContainer: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 30,
    backgroundColor: "rgb(255, 255, 255, 0.8)",
    borderRadius: 8,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 32,
  },
  title: {
    fontSize: 24,
    fontFamily: "medium",
    textTransform: "uppercase",
    color: "#344055",
    paddingBottom: 8,
    textAlign: "center",
  },
  description: {
    textAlign: "justify",
    fontSize: 16,
  },
  btnStyle: {
    alignSelf: "stretch",
    backgroundColor: "#00bfff",
    marginVertical: 8,
    borderRadius: 5,
  },
  btnText: {
    textAlign: "center",
    fontFamily: "bold",
    fontSize: 20,
    paddingVertical: 6,
  },
});

export default Course;
