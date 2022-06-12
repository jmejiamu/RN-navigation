import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const LandScapeItem = ({ item, onSelected }) => {
  return (
    <View style={styles.containerItem}>
      <TouchableOpacity
        style={{
          ...styles.item,
          borderWidth: 4,
          borderColor: item.color,
        }}
        onPress={() => onSelected(item)}
      >
        <View>
          <Text style={styles.title}>{item.country}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LandScapeItem;
