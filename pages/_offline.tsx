import { Container, Flex, Text } from "@chakra-ui/react";
import * as React from "react";

const Offline: React.FC = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor="#333"
      position="fixed"
      width="100vw"
      height="100vh"
      top="0"
      left="0"
      zIndex={"1000"}
    >
      <Text color="white" p='5' textAlign="center" fontSize="4xl">
        Check your internet connection
      </Text>
    </Flex>
  );
};

export default Offline;
