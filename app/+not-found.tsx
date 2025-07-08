import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import FlexBox from "@/components/FlexBox";
import Typography from "@/components/Typography";
import React from "react";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <FlexBox
        direction="column"
        justifyContent="space-evenly"
        style={styles.container}
      >
        <Typography type="title">This screen does not exist.</Typography>
        <Link href="/" style={styles.link}>
          <Typography type="link">Go to home screen!</Typography>
        </Link>
      </FlexBox>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
