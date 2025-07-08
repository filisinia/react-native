import DefaultSafeAreaView from "@/components/DefaultSafeAreaView";
import FlexBox from "@/components/FlexBox";
import SearchLocationTopBar from "@/components/ui/SearchLocationTopBar";
import React from "react";

const Home = () => {
  return (
    <DefaultSafeAreaView>
      <FlexBox direction="column">
        <SearchLocationTopBar />
      </FlexBox>
    </DefaultSafeAreaView>
  );
};

export default Home;
