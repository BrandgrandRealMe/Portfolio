import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
    return (
        <div className="socialIcons">
            <Link className="social" href="https://github.com/BrandgrandRealMe" target="_blank">
                <FontAwesomeIcon className="gh icon" icon={faGithub} />
            </Link>
            <Link className="social" href="https://discordapp.com/users/531186390717825074" target="_blank">
                <FontAwesomeIcon className="dc icon" icon={faDiscord} />
            </Link>
            <Link className="social" href="https://x.com/BrandgrandReal" target="_blank">
                <FontAwesomeIcon className="x icon" icon={faXTwitter} />
            </Link>
        </div>
    );
};

export default SocialIcons;