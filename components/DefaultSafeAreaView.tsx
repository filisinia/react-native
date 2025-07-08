import React, { FC, PropsWithChildren } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const DefaultSafeAreaView: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 16 }}
      edges={["top", "bottom"]}
    >
      {children}
    </SafeAreaView>
  );
};

export default DefaultSafeAreaView;
