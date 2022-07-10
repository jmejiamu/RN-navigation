import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import colors from '../utils/colors'


const PlaceItem = ({ id, title, image, address, onSelect }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onSelect(id)}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceItem;