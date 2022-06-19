import React, { useEffect } from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import { landscapeinfodetails } from "../../constants/data/index";
import Details from "../../components/details";
import { useDispatch, useSelector } from "react-redux";
import { filterProduct, selectProduct } from "../../store/action/index";

const LandScapeDetailsScreen = ({ navigation, route }) => {
  // const filteredDetails = landscapeinfodetails.filter(
  //   (item) => item.countryId === route.params.countryId
  // );
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.selected);

  const categoryProducts = useSelector(
    (state) => state.products.filterProducts
  );

  useEffect(() => {
    dispatch(filterProduct(selectedCategory.id));
  }, []);
  const onHandlerSelectedProduct = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("DetailsScreen", {
      // landscape: item,
      name: item.country,
    });
  };
  return (
    <View style={styles.container}>
      <Details data={categoryProducts} onSelected={onHandlerSelectedProduct} />
    </View>
  );
};

export default LandScapeDetailsScreen;
