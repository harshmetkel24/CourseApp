import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";

const CourseDetails = ({ navigation, route }) => {
  const { item } = route.params;
  const courses = [
    {
      key: 1,
      course: item.course1,
    },
    {
      key: 2,
      course: item.course2,
    },
    {
      key: 3,
      course: item.course3,
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.imgStyle}
          source={item.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.subTitle}>Courses Available:</Text>
        <FlatList
          data={courses}
          renderItem={({ item }) => (
            <Text style={styles.course}>{item.course}</Text>
          )}
        />
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: "#ddd",
    justifyContent: "center",
  },
  imgContainer: {
    padding: 16,
  },
  imgStyle: {
    height: undefined,
    width: "100%",
    aspectRatio: 1.2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
  },
  details: {
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  title: {
    fontFamily: "bold",
    fontSize: 32,
  },
  desc: {
    fontFamily: "regular",
    fontSize: 18,
    color: "#555",
    lineHeight: 24,
    textAlign: "justify",
  },
  subTitle: {
    fontSize: 18,
    fontFamily: "bold",
  },
  course: {
    textAlign: "center",
    backgroundColor: "#0047ab",
    marginVertical: 8,
    borderRadius: 8,
    padding: 8,
    color: "#fff",
    fontSize: 16,
    fontFamily: "medium",
    alignSelf: "center",
    width: 200,
  },
  price: {
    backgroundColor: "#1cac78",
    textAlign: "center",
    paddingVertical: 8,
    fontFamily: "medium",
    alignSelf: "center",
    width: 200,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 24,
    color: "#fff",
  },
});
