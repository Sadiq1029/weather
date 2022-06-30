// next and react
import type { NextPage } from "next";
import { useState } from "react";
// styling
import { Button, Flex, Input } from "@chakra-ui/react";
// icons
import { AiOutlineSearch } from "react-icons/ai";
// redux
import { useDispatch } from "react-redux";
import { setData } from "../states/data";

const Search: NextPage = () => {
  const [search, setSearch] = useState<any>("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&lang=english&appid=00dca6d20277c65e862e3758618bf541`
    )
      .then((response) => {
        if (response.status >= 400) {
          dispatch(setData(null));
          throw new Error("failed to load");
        } else return response.json();
      })
      .then((data) => {
        dispatch(setData(data));
        localStorage.setItem("location", JSON.stringify(data.name));
      })
      .catch((err) => console.log(err));
  };
  return (
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
        placeholder="Enter city name"
      />
      <Button
        backgroundColor="hsl(0, 0%, 93%)"
        _focus={{
          backgroundColor: "hsl(0, 0%, 83%)",
        }}
        _hover={{
          backgroundColor: "hsl(0, 0%, 83%)",
        }}
        onClick={handleSearch}
        aria-label="search"
      >
        <AiOutlineSearch color="#333" />
      </Button>
    </Flex>
  );
};

export default Search;
