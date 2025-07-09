import Typography from "@/components/Typography";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export type PillItemType = {
  label?: string;
};

type Props = {
  item: PillItemType;
  onClick?: (item: PillItemType) => void;
};

const PillButton = ({ item, onClick }: Props) => {
  return (
    <TouchableOpacity style={styles.pill} onPress={() => onClick?.(item)}>
      <Typography type="small" fontWeight="600">
        {item.label}
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
  },
});
