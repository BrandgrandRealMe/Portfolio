import React, { useEffect } from 'react';
import Script from 'next/script';

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
                    <h1>Brandon</h1>
                    <h4>Hello my name is Brandon I am a coding enthusiast, gamer, And a Highschool student. I build websites, make chat bots, and have fun!</h4>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;
