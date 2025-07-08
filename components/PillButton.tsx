import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Typography from "./Typography";

export type PillItemType = {
  emoji?: string;
  label?: string;
};

type Props = {
  item: PillItemType;
  onClick?: (item: PillItemType) => void;
};

const PillButton = ({ item, onClick }: Props) => {
  return (
    <TouchableOpacity style={styles.pill} onPress={() => onClick?.(item)}>
      <Typography>
        {item.emoji} {item.label}
      </Typography>
    </TouchableOpacity>
  );
};

export default PillButton;

const styles = StyleSheet.create({
  pill: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#111",
  },
});
