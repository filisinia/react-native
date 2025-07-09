import { StyleSheet, Text, TextStyle, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";

export type TypographyProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "subtitle" | "link" | "small";
  fontWeight?: TextStyle["fontWeight"];
};

function Typography({
  style,
  lightColor = "#fff",
  darkColor = "#fff",
  type = "default",
  fontWeight = "normal",
  ...rest
}: TypographyProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color, fontWeight },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "small" ? styles.small : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

export default Typography;

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
  },
  small: {
    fontSize: 14,
    lineHeight: 16,
  },
});
