// next
import type { NextPage } from "next";
// styling
import { Flex } from "@chakra-ui/react";
// components
import Overview from "./Overview";

const Hero: NextPage = () => {
  return (
    <Flex
      minW="100vw"
      minH="100vh"
      alignItems="flex-end"
      style={{
        background: `url('/images/background.jpg') center no-repeat`,
        backgroundSize:'cover'
      }}
    >
      <Overview />
    </Flex>
  );
};

export default Hero;
