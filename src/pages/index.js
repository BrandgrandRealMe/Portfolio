import Head from "next/head";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/nav/Navbar";
import AboutHeader from "@/components/home/header/header";
import About from "@/components/home/about";
import Packages from "@/components/home/packages";
import Bots from "@/components/home/bots";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>About BrandgrandReal (Brandon)</title>
        <meta
          name="description"
          content="Hello my name is Brandon I am a coding enthusiast, gamer, And a Highschool student. I build websites, make chat bots, and have fun!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AboutHeader />
      <About />
      <Packages />
      <Bots />
      <Footer />
    </>
  );
}