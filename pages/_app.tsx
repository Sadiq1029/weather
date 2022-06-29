// next and react
import type { AppProps } from "next/app";
import { useEffect } from "react";
// styling
import { ChakraProvider } from "@chakra-ui/react";
// state
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import dataReducer from "../states/data";

function MyApp({ Component, pageProps }: AppProps) {
  // service worker registration

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  // redux store

  const store = configureStore({
    reducer: {
      data: dataReducer,
    },
  });

  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
