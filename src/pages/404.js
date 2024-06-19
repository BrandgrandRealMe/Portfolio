import Head from "next/head";
import Link from "next/link";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/footer";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Why Brandgrand Rocks!</title>
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
            <div className="Error404Box">
                <div className="Error404Text"  data-text="404">
                    <h1>404</h1>
                    <div className="Error404SubText">
                        <Link className="link" href="/" target="_top">
                            Go home
                        </Link>
                        <Link className="link" href="javascript:history.back()" target="_top">
                            Go back
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}