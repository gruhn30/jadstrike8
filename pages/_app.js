import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import React, { useEffect, useState } from "react";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
