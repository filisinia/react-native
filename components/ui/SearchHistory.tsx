import FlexBox from "@/components/FlexBox";
import React from "react";
import { StyleSheet, View } from "react-native";
import Separator from "../Separator";
import SearchHistoryItem from "./SearchHistoryItem";

const history = ["Hotel villa santorini", "Pizzeria italiana", "Roma"];

const SearchHistory = () => {
  const handleDelete = (title: string) => {
    // history.filter((item) => item !== title);
  };

  return (
    <View style={style.wrapper}>
      <FlexBox
        direction="column"
        alignItems="flex-start"
        height="auto"
        width="auto"
        style={style.container}
        gap={10}
      >
        {history.map((item, index) => (
          <React.Fragment key={item}>
            <SearchHistoryItem
              title={item}
              onClick={() => {}}
              onDelete={handleDelete}
            />
            {history.length - 1 !== index && <Separator />}
          </React.Fragment>
        ))}
      </FlexBox>
    </View>
  );
};

const style = StyleSheet.create({
  wrapper: {
    position: "relative",
    width: "100%",
  },

  container: {
    position: "absolute",
    marginHorizontal: 16,
    paddingVertical: 10,
  },
});

export default SearchHistory;
