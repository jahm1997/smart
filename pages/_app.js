import "@/styles/globals.css";

import { useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({ Component, pageProps }) {
  console.log("--> 👌 Server Online in port " + 3000);

  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />;
    </>
  );
}
