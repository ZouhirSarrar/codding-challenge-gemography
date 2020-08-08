import React from "react";
import { Flex, Box, useColorMode, IconButton } from "@chakra-ui/core";
export default function Boxes() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align="center" justify="center" mt={3}>
      <Box>
        <Box>
          <IconButton
            icon={colorMode === "light" ? "moon" : "sun"}
            onClick={toggleColorMode}
          />
        </Box>
      </Box>
    </Flex>
  );
}
