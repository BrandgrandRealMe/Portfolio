import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import { ToastContainer, toast } from 'react-toastify';

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/footer";
const email = "mailto:brandon@brandgrand.rocks";
const phone = "9034589426";


export default function Home() {
  function copyPhoneNumber() {
    navigator.clipboard.writeText(phone);
    toast("Copied phone number to clipboard!");
  }
  return (
    <>
      <Head>
        <title>About BrandgrandReal (Brandon)</title>
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
      <ToastContainer position="top-center" pauseOnHover theme="dark" />
      <div className="contact">
        <div className="contactme">
          <svg className="text" viewBox="0 0 75 14"  >
            <text font-family="Open Sans" font-size="14" font-style="normal" font-weight="700" line-height="1" style={{ 'font-family': 'inherit', "padding-left": 0, "padding-right": 0, "margin-left": 0, "margin-right": 0, stroke: "none", 'stroke-width': "0", 'stroke-dasharray': "none", 'stroke-linecap': "butt", 'stroke-dashoffset': "0", 'stroke-linejoin': "miter", fill: "currentColor", 'fill-rule': "nonzero", opacity: "1" }}><tspan x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Contact Me</tspan></text>
          </svg>
          <div className="buttons">
            <Link className="button" href={email} target="_blank">
              <FontAwesomeIcon className="icon At" icon={faAt} />
            </Link>
            <a className="button" onClick={copyPhoneNumber}>
              <FontAwesomeIcon className="icon phone" icon={faPhone} />
            </a>
            <Link className="button" href="https://discordapp.com/users/531186390717825074" target="_blank">
              <FontAwesomeIcon className="icon" icon={faDiscord} />
            </Link>
            <Link className="button" href="https://x.com/BrandgrandReal" target="_blank">
              <FontAwesomeIcon className="icon" icon={faXTwitter} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}