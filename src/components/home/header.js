import React, { useEffect } from 'react';
import Script from 'next/script';

import Logo from "@/components/logo.js";

const AboutHeader = () => {
    useEffect(() => {
        // Import and execute the matrix effect logic from _matrix.js
        import('/public/_matrix.js').then(() => {
            // Initialize the matrix effect within this function to ensure canvas availability
            initializeMatrixEffect(); // Replace with your actual function name
        });
    }); // Empty dependency array ensures it runs only on initial mount

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
                    <h1>Brandgrand (Brandon)</h1>
                    <h4>Hello my name is Brandon I am a coding enthusiast, gamer, And a Highschool student. I build websites, make chat bots, and have fun!</h4>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;
