import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

const ArtCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.pic }} />
    </View>
  );
};

export default ArtCard;
