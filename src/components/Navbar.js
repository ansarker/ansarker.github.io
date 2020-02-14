import React, { Component } from 'react';
import { faHome, faInfo, faBriefcase, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import '../styles/Navbar.css';

library.add(faGithub, faLinkedin);


class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="scene">
                    <div className="box">
                        <div className="front face">
                        <FontAwesomeIcon icon={faHome} />
                        </div>
                        <div className="right face">
                            <p>HOME</p>
                        </div>
                    </div>
                </div>
                <div className="scene">
                    <div className="box">
                        <div className="front face">
                        <FontAwesomeIcon icon={faInfo} />
                        </div>
                        <div className="right face">
                            <p>ABOUT</p>
                        </div>
                    </div>
                </div>
                <div className="scene">
                    <div className="box">
                        <div className="front face">
                        <FontAwesomeIcon icon={faBriefcase} />
                        </div>
                        <div className="right face">
                            <p>PROJECTS</p>
                        </div>
                    </div>
                </div>
                <div className="scene">
                    <div className="box">
                        <div className="front face">
                        <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                        <div className="right face">
                            <p>CONTACT</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;