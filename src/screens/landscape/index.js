import React from "react";
import { styles } from "./styles";
import { View } from "react-native";
import LandScapeComponent from "../../components/landscape-component";
import { landscapeinfo } from "../../constants/data";

const LandScapeScreen = ({ navigation, route }) => {
  const onHandlerSelectedLandScape = (item) => {
    navigation.navigate("LandScapeDetailsScreen", {
      countryId: item.id,
      name: item.country,
    });
  };
  return (
    <View style={styles.container}>
      <LandScapeComponent
        data={landscapeinfo}
        onSelected={onHandlerSelectedLandScape}
      />
    </View>
  );
};

export default LandScapeScreen;
