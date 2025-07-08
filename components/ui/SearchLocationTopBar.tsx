import { Link } from "expo-router";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import FlexBox from "../FlexBox";
import SearchButton from "../SearchButton";
import SearchInput from "../SearchInput";

const SearchLocationTopBar = () => {
  return (
    <FlexBox direction="row" justifyContent="space-between" gap={5}>
      <Link href="/">
        <Icon name="chevron-back-outline" color="#fff" size={30} />
      </Link>
      <SearchInput placeholder="Search location" />
      <SearchButton />
    </FlexBox>
  );
};

export default SearchLocationTopBar;
