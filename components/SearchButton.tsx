import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FlexBox from "./FlexBox";

const SearchButton = () => {
  return (
    <TouchableOpacity style={style.button}>
      <FlexBox justifyContent="center" alignItems="center">
        <Icon name="search-outline" size={16} color="#000" />
      </FlexBox>
    </TouchableOpacity>
  );
};

export default SearchButton;

const style = StyleSheet.create({
  button: {
    height: "100%",
    backgroundColor: "#353535",
  },
});
