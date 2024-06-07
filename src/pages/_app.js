import "@/styles/globals.scss";
import "@/styles/partials/_navbar.scss";
import "@/styles/partials/_header.scss";
import "@/styles/partials/_packages.scss";
import "@/styles/partials/_footer.scss";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }