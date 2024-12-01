import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Beranda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 15,
    backgroundColor: "#28a745",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
