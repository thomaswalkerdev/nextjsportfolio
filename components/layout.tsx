import { Box } from "grommet";
import { Page } from "grommet/components/Page";
import React from "react";

export default function Layout({ children }: any) {
  return (
    <>
      <Page kind="wide">
        <Box flex align="center">
          <Box
            flex
            direction="column"
            align="start"
            justify="center"
            width={{ max: "800px" }}
          >
            {children}
          </Box>
        </Box>
      </Page>
    </>
  );
}
