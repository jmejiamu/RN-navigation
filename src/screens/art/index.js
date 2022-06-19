import { View, Text, FlatList } from "react-native";
import React from "react";
import { artdata } from "../../constants/data/artdata";
import ArtCard from "../../components/art/art-card";
import { styles } from "./styles";

const Art = () => {
  const renderItem = ({ item }) => <ArtCard item={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={artdata}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Art;
