import FlexBox from "@/components/FlexBox";
import Typography from "@/components/Typography";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
  title: string;
  onClick?: (title: string) => void;
  onDelete?: (title: string) => void;
};

const SearchHistoryItem = ({ title, onClick, onDelete }: Props) => {
  return (
    <TouchableOpacity style={style.item} onPress={() => onClick?.(title)}>
      <FlexBox justifyContent="space-between">
        <FlexBox gap={13} width="auto">
          <Icon name="history" size={24} color="#fff" />
          <Typography type="defaultSemiBold">{title}</Typography>
        </FlexBox>
        <TouchableOpacity onPress={() => onDelete?.(title)}>
          <Icon name="close" size={24} color="#5E5E5E" />
        </TouchableOpacity>
      </FlexBox>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  item: { flex: 1 },
});

export default SearchHistoryItem;
