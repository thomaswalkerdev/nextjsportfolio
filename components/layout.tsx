import { Box, PageContent } from "grommet";
import { Page } from "grommet/components/Page";
import React from "react";

export default function Layout({ children }: any) {
  return (
    <>
      <Page kind="wide">
        <Box flex align="center" justify="center" width="100%">
          <Box flex align="center" justify="center" width={{ max: "1200px" }}>
            {children}
          </Box>
        </Box>
      </Page>
    </>
  );
}
