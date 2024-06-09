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
const twitter = "BrandgrandReal";
const description = `Contact BrandgrandReal (Brandon) at ${email} or view the page for more options.`;

export default function Home() {
  function copyPhoneNumber() {
    navigator.clipboard.writeText(phone);
    toast("Copied phone number to clipboard!");
  }
  return (
    <>
      <Head>
        <title>Contact BrandgrandReal (Brandon)</title>
        <meta
          name="description"
          content={description}
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
            <text fontFamily="Open Sans" fontSize="14" fontStyle="normal" fontWeight="700" style={{ fontFamily: 'inherit', stroke: "none", strokeWidth: "0", strokeDasharray: "none", strokeLinecap: "butt", strokeDashoffset: "0", strokeLinejoin: "miter", fill: "currentColor", fillRule: "nonzero", opacity: "1" }}><tspan x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">Contact Me</tspan></text>
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