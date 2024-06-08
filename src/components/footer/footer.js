import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faDonate } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                    Made with <FontAwesomeIcon className="icon" icon={faHeart} /> to be open source by Brandon! {" "}
                <div className="links">
                    <Link className="link" href="https://github.com/BrandgrandRealMe/Portfolio" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faGithub} /> Source
                    </Link>
                    <Link className="link" href="https://ko-fi.com/brandonthedev" target="_blank">
                        <FontAwesomeIcon className="icon" icon={faDonate} /> Donate
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
