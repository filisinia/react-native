import React, { FC, PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type Props = {
  direction?: ViewStyle["flexDirection"];
  justifyContent?: ViewStyle["justifyContent"];
  alignContent?: ViewStyle["alignContent"];
  alignItems?: ViewStyle["alignItems"];
  height?: ViewStyle["height"];
  width?: ViewStyle["width"];
  gap?: number;
  style?: StyleProp<ViewStyle>;
};

const FlexBox: FC<PropsWithChildren<Props>> = ({
  children,
  direction = "row",
  justifyContent = "flex-start",
  alignContent = "flex-start",
  alignItems = "center",
  height = "100%",
  width = "100%",
  gap = 0,
  style,
}) => {
  return (
    <View
      style={[
        {
          height,
          width,
          display: "flex",
          flexDirection: direction,
          justifyContent,
          alignItems,
          alignContent,
          gap,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default FlexBox;
