import React from "react";
import { styles } from "./styles";
import { View } from "react-native";
import LandScapeComponent from "../../components/landscape-component";
// import { landscapeinfo } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../store/action/index";

const LandScapeScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const landscape = useSelector((state) => state.category.categories);
  const savedData = useSelector((state) => state.addLandscape);

  const onHandlerSelectedLandScape = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("LandScapeDetailsScreen", {
      // countryId: item.id,
      name: item.country,
    });
  };
  return (
    <View style={styles.container}>
      <LandScapeComponent
        data={landscape}
        onSelected={onHandlerSelectedLandScape}
      />
    </View>
  );
};

export default LandScapeScreen;
