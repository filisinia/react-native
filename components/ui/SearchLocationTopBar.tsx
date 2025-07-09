import FlexBox from "@/components/FlexBox";
import SearchButton from "@/components/SearchButton";
import SearchInput from "@/components/SearchInput";
import PillTabs from "@/components/ui/PillTabs";
import { Link } from "expo-router";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import SearchHistory from "./SearchHistory";

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
        height={40}
        style={{ paddingHorizontal: 16 }}
      >
        <Link href="/">
          <Icon name="chevron-back-outline" color="#fff" size={24} />
        </Link>
        <SearchInput placeholder="Search location" />
        <SearchButton />
      </FlexBox>
      <PillTabs />
      <SearchHistory />
    </FlexBox>
  );
};

export default SearchLocationTopBar;
