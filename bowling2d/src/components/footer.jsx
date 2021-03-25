import React from 'react';
import { IconContext } from "react-icons";
import { AiFillTwitterSquare } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import { SiGithub } from 'react-icons/si';
import '../styles/footer.scss'


function Footer(){

    return(
        <div id="footer">
            <ul className="div-ul-list">
                <li className="ul-li-options">
                    <IconContext.Provider value={{ color: "white", size: "2.5em", className: "global-class-name" }}>
                        <div>
                            <a href="https://twitter.com/andres0191"><AiFillTwitterSquare/></a>
                        </div>
                    </IconContext.Provider>
                </li>
                <li className="ul-li-options">
                    <IconContext.Provider value={{ color: "white", size: "2em", className: "global-class-name" }}>
                        <div>
                            <a href="https://www.linkedin.com/in/anfegar/"><ImLinkedin/></a>
                        </div>
                    </IconContext.Provider>
                </li>
                <li className="ul-li-options">
                    <IconContext.Provider value={{ color: "white", size: "2em", className: "global-class-name" }}>
                        <div>
                            <a href="https://github.com/andres0191"><SiGithub/></a>
                        </div>
                    </IconContext.Provider>
                </li>
            </ul>
            <h4 className="copyright">Technical test presented by Andres Felipe Garcia Rendon</h4>
            <p className="copyright">Andres Garcia 2021 Copyright © All Rights Reserved</p>
        </div>
    )
}


export default Footer