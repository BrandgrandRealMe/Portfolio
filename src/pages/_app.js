import "@/styles/globals.scss";
import "@/styles/partials/_navbar.scss";
import "@/styles/partials/_header.scss";
import "@/styles/partials/_packages.scss";
import "@/styles/partials/_bots.scss";
import "@/styles/partials/_footer.scss";
import "@/styles/partials/_codeblock.scss";
import "@/styles/partials/_about.scss";

import 'highlight.js/styles/github-dark.css'; 
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }