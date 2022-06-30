/* eslint-disable react-hooks/exhaustive-deps */
// next and react
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
import { setData } from "../states/data";
// components
import Stats from "../components/Stats";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  // initialization
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        localStorage.getItem("location")
          ? JSON.parse(localStorage.getItem("location") || "")
          : "Tokyo,JP"
      }&units=metric&lang=english&appid=00dca6d20277c65e862e3758618bf541`
    )
      .then((response) => {
        if (response.status >= 400) {
          throw Error("failed to fetch data");
        } else return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setData(data));
      })
      .catch((err) => console.log(err));
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
        <Hero />
        <Stats />
      </main>
    </>
  );
};

export default Home;
