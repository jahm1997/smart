import "@/styles/globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }) {
  console.log("--> 👌 Server Online in port " + 3000);
  return (
    <UserProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </UserProvider>
  );
}
