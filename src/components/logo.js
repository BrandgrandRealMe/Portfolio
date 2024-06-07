import Image from "next/image";
import PFP from "../utils/images/logo/PFP.png";

const Logo = () => {
    return (
        <Image
            src={PFP}
            alt="A pixel art portrait of a white man with medium length, crazy, dark blonde hair. He is wearing a teal shirt. His glasses are black.  He is facing forward and has a neutral expression on his face."
            className="Logo circle"
        />
    );
};

export default Logo;