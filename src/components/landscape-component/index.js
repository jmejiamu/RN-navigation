import React from "react";
import { FlatList } from "react-native";
import LandScapeItem from "./landscape-item";

const LandScapeComponent = ({ data, onSelected }) => {
  const renderItem = ({ item }) => {
    return <LandScapeItem item={item} onSelected={onSelected} />;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};
export default LandScapeComponent;
