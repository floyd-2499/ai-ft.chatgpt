import React from "react";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { SSRProvider } from "@react-aria/ssr";
import Head from "next/head";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "../view/layout/styles/global/_style.scss";
import store from "../config/store/reducers.ts";

const LayoutIndex = dynamic(() => import("../view/layout/Index"));

const MyApp = ({ Component, pageProps }: AppProps) => {
  const siteBaseURL = "http://localhost:3000/chatbot";
  return (
    <SSRProvider>
      <Provider store={store}>
      <LayoutIndex>
        <Head>
          <title>AI</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="alternate" hrefLang="x-default" href={siteBaseURL} />
        </Head>
        <Component {...pageProps} />
      </LayoutIndex>
      </Provider>
    </SSRProvider>
  );
};

export default MyApp;
