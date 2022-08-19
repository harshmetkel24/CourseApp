import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

// this hook is used whene we do not have direct access to navigation prop from StackNavigator
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Courses")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/90/000000/training.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Student Details")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/conference.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("About")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/about.png",
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Contact Us")}
      >
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://img.icons8.com/stickers/100/000000/phone-office.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#777",
  },
  menuItem: {
    padding: 8,
  },
  btnStyle: {
    textTransform: "uppercase",
    fontSize: 18,
  },
  iconStyle: {
    width: "100%",
    height: 40,
    aspectRatio: 1,
  },
});

export default Menu;
