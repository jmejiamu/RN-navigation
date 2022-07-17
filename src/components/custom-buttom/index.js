import React from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={{ style, ...styles.container }} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
