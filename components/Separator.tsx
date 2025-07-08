import React from "react";
import { View } from "react-native";

const Separator = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        borderTopWidth: 1,
        borderColor: "#303030",
      }}
    ></View>
  );
};

export default Separator;
