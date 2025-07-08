import React, { FC, PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

type Props = {
  direction?: ViewStyle["flexDirection"];
  justifyContent?: ViewStyle["justifyContent"];
  alignItems?: ViewStyle["alignItems"];
  gap?: number;
  style?: StyleProp<ViewStyle>;
};

const FlexBox: FC<PropsWithChildren<Props>> = ({
  children,
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "center",
  gap = 0,
  style,
}) => {
  return (
    <View
      style={[
        {
          display: "flex",
          flexDirection: direction,
          justifyContent,
          alignItems,
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
