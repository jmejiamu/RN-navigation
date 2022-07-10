import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { ImageSelector, LocationSelector } from "../../components/index";
import { savePlace } from "../../store/action/index";
import { colors } from "../../constants/theme/index";
import { styles } from "./styles";

const NewPlaceSreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  const handleTitleChange = (text) => setTitle(text);

  const handleSave = () => {
    dispatch(savePlace(title, image, location));
    navigation.navigate("LandScapeDetailsScreen");
  };

  const onLocationPicked = (location) => {
    setLocation(location);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <ImageSelector
          onImage={(image) => {
            setImage(image);
          }}
        />
        <LocationSelector onLocation={onLocationPicked} />
        <Button
          title="Grabar Dirección"
          color={colors.primary}
          onPress={() => handleSave()}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlaceSreen;
