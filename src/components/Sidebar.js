import React, {Component} from 'react';

import '../styles/Sidebar.css';
import '../styles/styles.css';
import Image from '../img/iansarker.jpg';
import Menu from './Menu';
import Navbar from './Navbar';


export default class Sidebar extends Component {
    render() {
        const info = this.props.info;
        return(
            <div className="sidebar">
                <Navbar />
                <div className="image-section">
                    <img className="figure" src={Image} alt="image"/>
                </div>
                <h2 className="info-name strong">{info.name}</h2>
                <div className="info">
                    <p>{info.dept},</p>
                    <p>{info.institute}</p>
                    <div>
                        <strong className="strong">Email: </strong>
                        <span>{info.email}</span>
                    </div>
                </div>

                <Menu />
            </div>
        );
    }
}