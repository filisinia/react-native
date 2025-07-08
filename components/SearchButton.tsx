import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FlexBox from "./FlexBox";

type Props = {
  onClick?: () => void;
};

const SearchButton = ({ onClick }: Props) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive((prev) => !prev);
    onClick?.();
  };

  return (
    <TouchableOpacity style={style.button} onPress={handleClick}>
      <FlexBox justifyContent="center" alignContent="flex-end">
        <Icon name="search" size={20} color={active ? "#fff" : "#000"} />
      </FlexBox>
    </TouchableOpacity>
  );
};

export default SearchButton;

const style = StyleSheet.create({
  button: {
    height: "100%",
    width: 49,
    backgroundColor: "#353535",
    borderRadius: 50,
  },
});
