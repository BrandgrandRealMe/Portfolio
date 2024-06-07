import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNpm } from '@fortawesome/free-brands-svg-icons';

const Packages = () => {
    return (
        <div className="packages">
            <h2 id="Packages">My Packages</h2>
            <div className="npm">
                <Link href="https://www.npmjs.com/package/betterdevlogs" target="_blank" className="Package">
                    <FontAwesomeIcon className="icon" icon={faNpm} />
                    <div className="desc">
                        <h2>betterdevlogs</h2>
                        Get styled logs in terminal, Ability to Post to a discord webhook and have daily log files.
                    </div>
                </Link>
                <Link href="https://www.npmjs.com/package/frctbaapi" target="_blank" className="Package">
                    <FontAwesomeIcon className="icon" icon={faNpm} />
                    <div className="desc">
                        <h2>frctbaapi</h2>
                        A package to access only FRC data from the TBA api.
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Packages;
