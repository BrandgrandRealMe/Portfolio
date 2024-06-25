import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";

import AlvePreview from "./images/wallpaperPreviews/alve.gif";
import MatrixPreview from "./images/wallpaperPreviews/matrix.gif";
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
                    I revived this one :) \ A pixelart futureistic city Lively & Wallpaper Engine Wallpaper.
                </div>
            </Link>
            <Link href="https://github.com/BrandgrandRealMe/MatrixLiveWallpaper" target="_blank" className="wallpaper">
                <div className="icons">
                    <div className="Services">
                        <Image src={LivelyLogo} className="icon" />
                        <Image src={WELogo} className="icon" />
                    </div>
                    <Image src={MatrixPreview} alt="Matrix rain" className="preview" />
                </div>
                <div className="desc">
                    <h2>An Matrix rain Live Wallpaper</h2>
                    Bring the iconic Matrix aesthetic to your desktop with this customizable Matrix rain live wallpaper. Immerse yourself in a cascading stream of green code, just like in the movie. Tweak various aspects of the animation to match your style, from the speed of the rain to the color scheme. Whether you're a die-hard Matrix fan or just love the techy vibe, this live wallpaper is sure to add a touch of cyberpunk flair to your screen.
                </div>
            </Link>
        </div>
    );
};

export default Wallpapers;
