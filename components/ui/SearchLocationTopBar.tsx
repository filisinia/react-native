import { Link } from "expo-router";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import FlexBox from "../FlexBox";
import SearchButton from "../SearchButton";
import SearchInput from "../SearchInput";
import PillTabs from "./PillTabs";

const SearchLocationTopBar = () => {
  return (
    <FlexBox
      direction="column"
      style={{ marginTop: 27 }}
      gap={15}
      height="auto"
    >
      <FlexBox
        direction="row"
        justifyContent="space-between"
        gap={5}
        height={34}
      >
        <Link href="/">
          <Icon name="chevron-back-outline" color="#fff" size={30} />
        </Link>
        <SearchInput placeholder="Search location" />
        <SearchButton />
      </FlexBox>
      <PillTabs />
    </FlexBox>
  );
};

export default SearchLocationTopBar;
