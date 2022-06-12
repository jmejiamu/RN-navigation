import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const DetailsItem = ({ item, onSelected }) => {
  return (
    <View style={styles.containerItem}>
      <TouchableOpacity style={styles.item} onPress={() => onSelected(item)}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.detailsContainer}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.detailText}> {item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default DetailsItem;
