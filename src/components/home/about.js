import Link from "next/link";
import React, { useState } from 'react';

import JSCB from "@/components/codeblocks/js"
const aboutCBText = `class AboutMe {
    constructor() {
      this.name = "Brandon";
      this.username = "BrandgrandReal";
      this.discord = "BrandgrandReal";
      this.gender = "Male";
    }
    whoAmI() {
      return ["coding enthusiast", "gamer", "Graphic Designer"];
    }
    whatIDo() {
      return ["build websites", "Make chat bots", "have fun"];
    }
  } `

const About = () => {
    const [text, setText] = useState(aboutCBText);

    return (
        <div className="About">
            <div className="code">
            <h2 id="AboutMe">About Me</h2>
            <div><JSCB text={text} /></div>
            </div>
        </div>
    );
};

export default About;
