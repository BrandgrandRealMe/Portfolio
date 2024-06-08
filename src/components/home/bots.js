import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";

import RevoltIcon from "./images/revolt.svg";
import MPPIcon from "./images/piano.svg";

import CyberbotPFP from "./images/CyberbotPFP.png";
import TBAUnofficialPFP from "./images/TBAUnofficialPFP.png";
import RevoltanatorPFP from "./images/RevoltanatorPFP.jpg";
import LumAInaPFP from "./images/LumAInaPFP.png";

const Bots = () => {
    return (
        <div className="bots">
            <h2 id="Bots">Some Of My Bots</h2>
            <div className="discord">
                <Link href="https://top.gg/bot/745786473554378832" target="_blank" className="Bot">
                    <div className="icons">
                        <div className="Services">
                            <FontAwesomeIcon className="icon" icon={faDiscord} />
                        </div>
                        <Image src={CyberbotPFP} alt="A pixel art of a robot head" className="pfp circle" />
                    </div>
                    <div className="desc">
                        <h2>CYBΞRBot</h2>
                        He has slash commands, You can build a simple embed message, you can get random posts from a few subreddits, And more!
                    </div>
                </Link>
                <Link href="https://top.gg/bot/1232768387399024732" target="_blank" className="Bot">
                    <div className="icons">
                        <div className="Services">
                            <FontAwesomeIcon className="icon" icon={faDiscord} />
                        </div>
                        <Image src={TBAUnofficialPFP} alt="Golden TBA logo" className="pfp circle" />
                    </div>
                    <div className="desc">
                        <h2>TBAUnofficial</h2>
                        Developed by FRC member Brandon [@BrandgrandReal] for other FRC members to fetch information from TBA and my own DB.
                    </div>
                </Link>
            </div>
            <div className="revolt">
                <Link href="https://app.revolt.chat/bot/01H3MVST5ASBE2M08KJ393M6HJ" target="_blank" className="Bot">
                    <div className="icons">
                        <div className="Services">
                            <Image src={RevoltIcon} className="icon" />
                        </div>
                        <Image src={RevoltanatorPFP} alt="A pixel art of a robot head" className="pfp circle" />
                    </div>
                    <div className="desc">
                        <h2>Revoltanator</h2>
                        Hey there! I'm Revoltanator, your ultimate companion in the digital realm! I'm Equipped with a diverse range of skills and a witty personality that'll keep you entertained. Whether you need a dose of laughter with my corny dad jokes or to talk with AI. I have all things fun!
                    </div>
                </Link>
                <Link href="https://multiplayerpiano.net/?c=✧𝓓𝓔𝓥%20𝓡𝓸𝓸𝓶✧" target="_blank" className="Bot">
                    <div className="icons">
                        <div className="Services">
                            <Image src={MPPIcon} className="icon" />
                            <Image src={RevoltIcon} className="icon" />
                        </div>
                        <Image src={LumAInaPFP} alt="A pixel art of a robot head" className="pfp circle" />
                    </div>
                    <div className="desc">
                        <h2>LumAIna</h2>
                        An AI/multipurpose bot and Bridge between MPP and Revolt. Click to view on MPP.net
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Bots;
