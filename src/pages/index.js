import Head from "next/head";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/nav/Navbar";
import AboutHeader from "@/components/home/header/header";
import About from "@/components/home/about";
import Packages from "@/components/home/packages";
import Bots from "@/components/home/bots";
import Wallpapers from "@/components/home/wallpapers";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Why Brandon Rocks!</title>
        <meta
          name="description"
          content="Hello my name is Brandon I am a coding enthusiast, gamer, And a Highschool student. I build websites, make chat bots, and have fun!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Navbar />
      <AboutHeader />
      <About />
      <Packages />
      <Bots />
      <Wallpapers />
      <Footer />
    </>
  );
}