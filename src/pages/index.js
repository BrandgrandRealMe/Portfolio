import Head from "next/head";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

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
    </>
  );
}