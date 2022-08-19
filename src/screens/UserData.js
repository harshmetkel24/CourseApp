import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";

const UserData = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      setData(await response.json());
      setIsLoaded(true);
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List of students</Text>
      <View>
        {isLoaded ? (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  style={styles.image}
                  source={{ uri: item.image }}
                  resizeMode="cover"
                />
                <View style={styles.content}>
                  <View style={styles.bioContainer}>
                    <Text style={styles.bioText}>Bio-Data</Text>
                    <Text style={styles.bioText}>
                      {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
                    </Text>
                  </View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.prop}>Contact no: {item.mobile}</Text>
                  <Text style={styles.prop}>Email: {item.email}</Text>
                  <Text style={styles.desc}>{item.description}</Text>
                  <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => Linking.openURL(item.website)}
                  >
                    <Text style={styles.btnTextStyle}>Website</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        ) : (
          <ActivityIndicator
            style={{ position: "absolute", top: 250, left: "45%" }}
            size={"large"}
            color="red"
          />
        )}
      </View>
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebedee",
    width: "100%",
    minHeight: "100%",
  },
  heading: {
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "bold",
    marginTop: 20,
  },
  image: {
    height: 200,
    width: "100%",
    aspectRatio: 1,
  },
  card: {
    marginHorizontal: 20,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginVertical: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    width: 300,
    borderRadius: 8,
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 8,
  },
  bioContainer: {
    flexDirection: "row",
    backgroundColor: "#444",
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: "space-between",
  },
  bioText: {
    color: "#fff",
    fontFamily: "regular",
    fontSize: 18,
  },
  content: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  name: {
    fontSize: 22,
    fontFamily: "medium",
    marginVertical: 8,
  },
  prop: {
    fontSize: 18,
    fontFamily: "medium",
  },
  desc: {
    fontFamily: "regular",
    fontSize: 20,
    color: "#555",
  },
});
