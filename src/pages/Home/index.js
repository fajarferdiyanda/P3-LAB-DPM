import React, { useEffect } from "react";
import { View } from "react-native";
import Header from "../../components/Header";
import ArticleList from "../../components/ArticleList";
import { globalStyles } from "../../styles/globalStyles";

const HomeScreen = () => {
  useEffect(() => {
    console.log("Halaman Beranda dimuat");

    return () => {
      console.log("Halaman Beranda dihentikan");
    };
  }, []);

  return (
    <View style={globalStyles.container}>
      <Header />
      <ArticleList />
    </View>
  );
};

export default HomeScreen;
