import React from "react";
import { ScrollView, View, StyleSheet, Text, Image } from "react-native";
import { MapPreview } from "../../components/index";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { colors } from "../../constants/theme/index";

const PlaceDetailScreen = ({ navigation, route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) =>
    state.addLandscape.landscape.find((place) => place.id === placeId)
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: place?.image }} style={styles.image} />
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <MapPreview
          style={styles.map}
          location={{ lat: place.lat, lng: place.lng }}
        >
          <Text>Ubicacion no disponible </Text>
        </MapPreview>
      </View>
    </ScrollView>
  );
};

export default PlaceDetailScreen;
