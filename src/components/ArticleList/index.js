import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const articles = [
  { id: "1", title: "Artikel Pertama", description: "Ini adalah artikel pertama." },
  { id: "2", title: "Artikel Kedua", description: "Ini adalah artikel kedua." },
  { id: "3", title: "Artikel Ketiga", description: "Ini adalah artikel ketiga." },
];

const ArticleList = () => {
  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.articleContainer}>
          <Text style={styles.articleTitle}>{item.title}</Text>
          <Text style={styles.articleDescription}>{item.description}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  articleDescription: {
    fontSize: 14,
    color: "#6c757d",
  },
});

export default ArticleList;
