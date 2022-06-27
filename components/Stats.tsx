import type { NextPage } from "next";
import { setData } from "../states/data";
import { useDispatch } from "react-redux";
import {
  Container,
  Flex,
  Input,
  Button,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectValue } from "../states/data";

const Stats: NextPage = () => {
  const dispatch = useDispatch();
  const [myData, setMyData] = useState<any>(null);
  const [search, setSearch] = useState<any>("");
  const data = useSelector(selectValue);

  useEffect(() => {
    if (data) {
      setMyData(data);
    }
  }, [data]);

  return (
    <Container
      width={{ base: "100vw", md: "50%" }}
      maxW={{ md: "1000px" }}
      maxWidth="full"
      backgroundColor={{ base: "#111", md: "rgba(0,0,0,0.5)" }}
      minH="100vh"
      position={{ base: "relative", md: "fixed" }}
      right="0"
      top="0"
      boxShadow={"xl"}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Flex alignItems="center" gap="3">
        <Input
          variant="filled"
          backgroundColor="hsl(0, 0%, 93%)"
          my="5"
          color="black"
          _placeholder={{ color: "#222" }}
          _focus={{
            backgroundColor: "hsl(0, 0%, 83%)",
          }}
          _hover={{
            backgroundColor: "hsl(0, 0%, 83%)",
          }}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tokyo, JP"
        />
        <Button
          backgroundColor="hsl(0, 0%, 93%)"
          _focus={{
            backgroundColor: "hsl(0, 0%, 83%)",
          }}
          _hover={{
            backgroundColor: "hsl(0, 0%, 83%)",
          }}
          onClick={() => {
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&lang=english&appid=00dca6d20277c65e862e3758618bf541`
            )
              .then((response) => response.json())
              .then((data) => {
                dispatch(setData(data));
              });
          }}
          aria-label="search"
        >
          <AiOutlineSearch color="#333" />
        </Button>
      </Flex>
      <Grid
        gap="10"
        mx="auto"
        width="80%"
        p="5"
        height={{ md: "85vh" }}
        overflowX={{ md: "auto" }}
        // border="1px aqua solid"
        minW="430px"
        color="white"
        justifyContent="center"
        gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
      >
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Feels like
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.main.feels_like : ""}&deg;C
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Humidity
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.main.humidity : ""} &#37;
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Longitude
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.coord.lon : ""}&deg;
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Latitude
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.coord.lat : ""}&deg;
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Max Temp
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.main.temp_max : ""}&deg;C
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Min Temp
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.main.temp_min : ""}&deg;C
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Pressure
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.main.pressure : ""}hPa
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Stats;
