import React from "react";
import { FlatList } from "react-native";
import DetailsItem from "./details-item";

const Details = ({ data, onSelected }) => {
  const renderItem = ({ item }) => {
    return <DetailsItem item={item} onSelected={onSelected} />;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};
export default Details;
