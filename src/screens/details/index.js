import React from "react";
import { styles } from "./styles";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";

const DetailsScreen = ({ navigation, route }) => {
  // const landscape = route.params.landscape;
  const landscape = useSelector((state) => state.products.selected);

  const { image, description, title } = landscape;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
  );
};

export default DetailsScreen;
