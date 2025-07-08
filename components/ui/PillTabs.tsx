import FlexBox from "@/components/FlexBox";
import PillButton, { PillItemType } from "@/components/PillButton";
import React from "react";
import { ScrollView } from "react-native";

const categories: PillItemType[] = [
  { label: "Pinned", emoji: "📌" },
  { label: "Near me", emoji: "📍" },
  { label: "Hotels", emoji: "🏨" },
  { label: "Restaurants", emoji: "🍜" },
  { label: "Category", emoji: "✨" },
  { label: "Category 2", emoji: "👙" },
];

type Props = {
  onChange?: (value: string) => void;
};

const PillTabs = ({ onChange }: Props) => {
  const handleOnClick = (item: PillItemType) => {
    onChange?.(item.label || "");
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlexBox height="auto" gap={7}>
        {categories.map((item, index) => (
          <PillButton key={index} item={item} onClick={handleOnClick} />
        ))}
      </FlexBox>
    </ScrollView>
  );
};

export default PillTabs;
