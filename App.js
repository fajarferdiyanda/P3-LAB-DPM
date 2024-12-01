import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import HomeScreen from "./src/pages/Home";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
