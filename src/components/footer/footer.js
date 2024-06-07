import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                Made with <FontAwesomeIcon className="icon" icon={faHeart} /> by Brandon!
            </footer>
        </div>
    );
};

export default Footer;
