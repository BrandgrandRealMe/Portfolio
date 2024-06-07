import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFileArchive } from '@fortawesome/free-regular-svg-icons';
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                    Made with <FontAwesomeIcon className="icon" icon={faHeart} /> to be open source by Brandon! {" "}
                <div className="links">
                    <Link className="link" href={"/"}>
                        <FontAwesomeIcon className="icon" icon={faFileArchive} /> Source
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
