import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import { landscapeinfodetails } from "../../constants/data/index";
import Details from "../../components/details";

const LandScapeDetailsScreen = ({ navigation, route }) => {
  const filteredDetails = landscapeinfodetails.filter(
    (item) => item.countryId === route.params.countryId
  );

  const onHandlerSelectedProduct = (item) => {
    navigation.navigate("DetailsScreen", {
      landscape: item,
      name: item.country,
    });
  };
  return (
    <View style={styles.container}>
      <Details data={filteredDetails} onSelected={onHandlerSelectedProduct} />
    </View>
  );
};

export default LandScapeDetailsScreen;
