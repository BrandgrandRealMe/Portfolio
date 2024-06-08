import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

import CyberbotPFP from "./images/CyberbotPFP.png";
import TBAUnofficialPFP from "./images/TBAUnofficialPFP.png";


const Bots = () => {
    return (
        <div className="bots">
            <h2 id="Bots">Some Of My Bots</h2>
            <div className="discord">
                <Link href="https://top.gg/bot/745786473554378832" target="_blank" className="Bot">
                    <div className="icons">
                        <FontAwesomeIcon className="icon" icon={faDiscord} />
                        <Image src={CyberbotPFP} alt="A pixel art of a robot head" className="pfp circle" />
                    </div>
                    <div className="desc">
                        <h2>CYBΞRBot</h2>
                        He has slash commands, You can build a simple embed message, you can get random posts from a few subreddits, And more!
                    </div>
                </Link>
                <Link href="https://top.gg/bot/1232768387399024732" target="_blank" className="Bot">
                    <div className="icons">
                        <FontAwesomeIcon className="icon" icon={faDiscord} />
                        <Image src={TBAUnofficialPFP} alt="Golden TBA logo" className="pfp circle" />
                    </div>
                    <div className="desc">
                        <h2>TBAUnofficial</h2>
                        Developed by FRC member Brandon [@BrandgrandReal] for other FRC members to fetch information from TBA and my own DB.
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Bots;
