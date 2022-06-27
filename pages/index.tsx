/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Background from "../components/Background";
import Stats from "../components/Stats";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setData } from "../states/data";

const Home: NextPage = () => {
  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&units=metric&lang=english&appid=00dca6d20277c65e862e3758618bf541";

  const dispatch = useDispatch();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setData(data));
      });
  }, []);

  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta
          name="description"
          content="Weather app made with love by Sadiqur Rahman"
        />
      </Head>
      <main style={{ overflowX: "hidden" }}>
        <Background />
        <Stats />
      </main>
    </>
  );
};

export default Home;
