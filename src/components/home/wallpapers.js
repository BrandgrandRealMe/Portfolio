import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";

import AlvePreview from "./images/wallpaperPreviews/alve.gif";
import LivelyLogo from "./images/lively.png";
import WELogo from "./images/wallpaperengine.webp";


const Wallpapers = () => {
    return (
        <div className="wallpapers">
            <h2 id="Wallpapers">Some Of My Wallpapers</h2>
            <Link href="https://github.com/BrandgrandRealMe/alve-revived-wallpaper" target="_blank" className="wallpaper">
                <div className="icons">
                    <div className="Services">
                        <Image src={LivelyLogo} className="icon" />
                        <Image src={WELogo} className="icon" />
                    </div>
                    <Image src={AlvePreview} alt="Alve" className="preview" />
                </div>
                <div className="desc">
                    <h2>Alve revived wallpaper</h2>
                    A pixelart futureistic city Lively & Wallpaper Engine Wallpaper.
                </div>
            </Link>
        </div>
    );
};

export default Wallpapers;
