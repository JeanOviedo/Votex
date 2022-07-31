import React from "react";

import Git from "../../src/Icos/git.png";
import Li from "../../src/Icos/linked.png";
import Insta from "../../src/Icos/insta.png";
import Web from "../../src/Icos/web.png";
export default function Footer() {
    return (<div className="footer"><div className="footer2">
        <h3>Proyecto Votex</h3>
        <p>
            Realizado por{" "}
            <a href="https://www.jeanoviedo.com" target="_blank" rel="noreferrer"><br></br><br></br>
                Jean Oviedo
            </a>
            , es una app que permite realizar votaciones escolres, esta fue realizada con
                    JavaScript, CSS, React, Redux.
            <br></br>
        </p>
        <br/>

        <a href="https://github.com/JeanOviedo" target="_blank" rel="noreferrer">
            <img src={Git}
                className="ico"
                alt="..."/>
        </a>
        <a href="https://www.linkedin.com/in/jean-oviedo/" target="_blank" rel="noreferrer">
            <img src={Li}
                className="ico"
                alt="..."/>
        </a>
        <a href="https://www.instagram.com/jeanoviedolopez/" target="_blank" rel="noreferrer">
            <img src={Insta}
                className="ico"
                alt="..."/>
        </a>
        <a href="https://www.jeanoviedo.com" target="_blank" rel="noreferrer">
            <img src={Web}
                className="ico"
                alt="..."/>
        </a>
        </div></div>);
}
