import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = {
  onChange?: (value: string) => void;
  placeholder?: string;
};

const SearchInput = ({ onChange, placeholder }: Props) => {
  const [value, setValue] = useState<string>("");

  const handleChangeValue = (value: string) => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <TextInput
      style={style.textInput}
      placeholderTextColor="#8b8b8b"
      value={value}
      onChangeText={handleChangeValue}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;

const style = StyleSheet.create({
  textInput: {
    color: "#fff",
    height: "100%",
    flex: 1,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#353535",
    paddingVertical: 6,
    paddingHorizontal: 9,
  },
});
