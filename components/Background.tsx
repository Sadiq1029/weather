import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectValue } from "../states/data";

const Background: NextPage = () => {
  const [myData, setMyData] = useState<any>(null);
  const data = useSelector(selectValue);

  useEffect(() => {
    if (data) {
      setMyData(data);
    }
  }, [data]);

  return (
    <Flex
      minW="100vw"
      minH="100vh"
      alignItems="flex-end"
      style={{
        background: `url('/images/background.jpg') center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <Flex>
        <Flex id="stats" m="8" flexDirection="column" color="white">
          <Text fontSize="xl" fontWeight="hairline">
            {myData ? myData.name : "_"}, {myData ? myData.sys.country : "_"}
          </Text>
          <Text fontWeight="bold" fontSize="8xl">
            {myData ? Math.round(myData.main.temp) : "0"}&deg;C
          </Text>
          <Text>{myData ? myData.weather[0].main : ""}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Background;
