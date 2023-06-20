import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store";
import Navbar from "./base/Navbar";
import "../styles/globals.css";

export default function MyAPP({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap"
      />
    </>
  );
}
