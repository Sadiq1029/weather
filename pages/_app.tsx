import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import dataReducer from "../states/data";

function MyApp({ Component, pageProps }: AppProps) {
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
