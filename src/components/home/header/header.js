import React, { useEffect } from 'react';
import Script from 'next/script';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import SocialIcons from "@/components/home/header/socialicons";

import Logo from "@/components/logo.js";

const AboutHeader = () => {
    return (
        <div className="aboutHeader">
            <Script
                type="text/javascript"
                id="matrix-script-loader"
                src="/_matrix.js"
            />
            <canvas></canvas>
            <div className='aboutInfo'>
                <Logo />
                <div className="headerText">
                    <h1>Why Brandon Rocks</h1>
                    <h4>Hello my name is Brandon I am a coding enthusiast, gamer, And a Graphic designer. I build websites, make chat bots, and have fun!</h4>
                </div>
            </div>
            <FontAwesomeIcon className="DownIcon" icon={faChevronDown} />
            <SocialIcons />
        </div>
    );
};

export default AboutHeader;
