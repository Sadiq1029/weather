// next and react
import type { NextPage } from "next";
import { useEffect, useState } from "react";
// styling
import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
// redux
import { useSelector } from "react-redux";
import { selectValue } from "../states/data";
// components
import Search from "./Search";

const Stats: NextPage = () => {
  const [myData, setMyData] = useState<any>(null);
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
      <Search />
      <Grid
        gap="10"
        mx="auto"
        width="80%"
        p="5"
        height={{ md: "85vh" }}
        overflowX={{ md: "auto" }}
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
            {myData ? myData.main.feels_like : "__"}&deg;C
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Humidity
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.main.humidity : "__"} &#37;
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Longitude
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.coord.lon : "__"}&deg;
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Latitude
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.coord.lat : "__"}&deg;
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Max Temp
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.main.temp_max : "__"}&deg;C
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Min Temp
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.main.temp_min : "__"}&deg;C
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="3xl" fontWeight="bold ">
            Pressure
          </Text>
          <Text fontSize="2xl" opacity=".8">
            {myData ? myData.main.pressure : "__"}hPa
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Stats;
